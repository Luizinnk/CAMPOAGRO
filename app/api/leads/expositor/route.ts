import { NextResponse } from 'next/server';

import { sendLeadConfirmationEmail } from '@/lib/leads/email';
import { persistLead } from '@/lib/leads/persist-lead';
import { parseExpositorLead } from '@/lib/leads/validation';
import { buildWhatsAppUrl } from '@/lib/leads/whatsapp';
import type { ExpositorLeadResponse } from '@/lib/leads/types';

async function parseRequestBody(request: Request): Promise<{ body?: unknown; error?: string }> {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return { error: 'Content-Type deve ser application/json.' };
  }

  let text: string;
  try {
    text = await request.text();
  } catch {
    return { error: 'Corpo da requisição inválido.' };
  }

  if (!text.trim()) {
    return { error: 'Corpo da requisição vazio.' };
  }

  try {
    return { body: JSON.parse(text) as unknown };
  } catch {
    return { error: 'JSON inválido.' };
  }
}

export async function POST(request: Request) {
  try {
    const parsedBody = await parseRequestBody(request);
    if (parsedBody.error) {
      return NextResponse.json({ ok: false, error: parsedBody.error }, { status: 400 });
    }

    const parsed = parseExpositorLead(parsedBody.body);

    if (!parsed.data) {
      return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
    }

    const lead = parsed.data;
    const storage = await persistLead(lead);
    const emailResult = await sendLeadConfirmationEmail(lead);
    const whatsappUrl = buildWhatsAppUrl(lead);

    const response: ExpositorLeadResponse = {
      ok: true,
      whatsappUrl,
      email: emailResult,
      storage,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('[leads/expositor]', error);
    return NextResponse.json(
      { ok: false, error: 'Não foi possível registrar seu interesse. Tente novamente.' },
      { status: 500 },
    );
  }
}
