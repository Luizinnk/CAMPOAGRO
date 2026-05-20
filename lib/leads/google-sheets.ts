import { google } from 'googleapis';

import {
  getGoogleServiceAccountCredentials,
  isGoogleServiceAccountConfigured,
} from './google-credentials';
import type { ExpositorLeadPayload } from './types';
import { ingressoLabel, patrocinioLabel } from './types';

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

const TAB_MAP: Record<ExpositorLeadPayload['interesse'], { name: string; range: string }> = {
  expositor:    { name: 'Expositores',   range: 'A:H' },
  patrocinador: { name: 'Patrocinadores', range: 'A:I' },
  ingresso:     { name: 'Compradores',   range: 'A:H' },
};

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID && isGoogleServiceAccountConfigured(),
  );
}

function getSheetsClient() {
  const credentials = getGoogleServiceAccountCredentials();

  if (!credentials) {
    throw new Error('Credenciais do Google Sheets não configuradas.');
  }

  const { email, privateKey } = credentials;

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: [SHEETS_SCOPE],
  });

  return google.sheets({ version: 'v4', auth });
}

/** Data/hora legível na planilha (evita serial 46162,54 com USER_ENTERED + vírgula do pt-BR). */
function formatLeadTimestamp(date = new Date()): string {
  const parts = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? '';

  return `${get('day')}/${get('month')}/${get('year')} ${get('hour')}:${get('minute')}:${get('second')}`;
}

function leadToRow(lead: ExpositorLeadPayload): string[] {
  const savedAt = formatLeadTimestamp();
  const base = [savedAt, lead.nome, lead.email, lead.telefone];
  const tail = [lead.mensagem ?? '', 'site-campoagro', 'novo'];

  if (lead.interesse === 'expositor') {
    return [...base, lead.empresa ?? '', ...tail];
  }

  if (lead.interesse === 'patrocinador') {
    return [...base, lead.empresa ?? '', lead.tipoPatrocinio ? patrocinioLabel(lead.tipoPatrocinio) : '', ...tail];
  }

  // ingresso
  return [...base, lead.tipoIngresso ? ingressoLabel(lead.tipoIngresso) : '', ...tail];
}

export async function appendLeadToGoogleSheets(lead: ExpositorLeadPayload): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!spreadsheetId) throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID não configurado.');

  const { name, range } = TAB_MAP[lead.interesse];
  const sheets = getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${name}!${range}`,
    // RAW: grava o texto da data como exibido (USER_ENTERED convertia "dd/mm/aaaa, hh:mm" em serial)
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [leadToRow(lead)] },
  });
}
