import { google } from 'googleapis';

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
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY,
  );
}

function getSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!email || !privateKey) {
    throw new Error('Credenciais do Google Sheets não configuradas.');
  }

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: [SHEETS_SCOPE],
  });

  return google.sheets({ version: 'v4', auth });
}

function leadToRow(lead: ExpositorLeadPayload): string[] {
  const savedAt = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
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
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [leadToRow(lead)] },
  });
}
