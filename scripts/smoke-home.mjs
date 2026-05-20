/**
 * Smoke test da home (nav, carrosséis de shows, galeria).
 * Requer: dev server em BASE_URL (default http://localhost:3000).
 */
import { chromium } from 'playwright';

const BASE_URL = process.env.SMOKE_BASE_URL ?? 'http://localhost:3000';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function waitForLoadingHidden(page) {
  await page.waitForFunction(
    () => {
      const el = document.getElementById('loading');
      return el && el.classList.contains('hidden');
    },
    { timeout: 20_000 },
  );
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  const failures = [];

  try {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    await waitForLoadingHidden(page);

    // --- Nav: hamburger + âncora ---
    const nav = page.locator('#navbar');
    await nav.locator('#hamburger').click();
    await page.waitForTimeout(200);
    assert(await nav.evaluate((el) => el.classList.contains('menu-open')), 'Menu mobile não abriu (menu-open)');

    await page.locator('#navbar a[href="#memorias"]').click();
    await page.waitForTimeout(900);
    const memoriasTop = await page.locator('#memorias').evaluate((el) => el.getBoundingClientRect().top);
    assert(memoriasTop < 140, `Scroll para #memorias falhou (top=${memoriasTop})`);

    const hash = await page.evaluate(() => window.location.hash);
    assert(hash === '#memorias', `Hash esperado #memorias, obtido ${hash || '(vazio)'}`);

    // --- Shows: abas Arte / Vídeo ---
    await page.locator('#shows').scrollIntoViewIfNeeded();
    const joaoControls = page.locator('.artist-carousel-controls[aria-label="Carrossel Joao Nelore e Texano"]');
    const joaoVideoBtn = joaoControls.getByRole('button', { name: 'Video' });
    await joaoVideoBtn.click();
    assert(await joaoVideoBtn.evaluate((el) => el.classList.contains('active')), 'Aba Video do carrossel João não ficou ativa');

    // --- Galeria: modal + Escape ---
    await page.locator('#memorias .memory-card').first().click();
    const modal = page.locator('.media-modal.open');
    await modal.waitFor({ state: 'visible', timeout: 5000 });
    assert(await page.locator('.media-modal-content img').count() > 0, 'Modal sem imagem');

    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
    assert((await modal.count()) === 0 || !(await modal.first().isVisible()), 'Modal não fechou com Escape');

    console.log('OK smoke-home: nav, shows (carrossel), galeria/modal');
  } catch (err) {
    failures.push(err instanceof Error ? err.message : String(err));
    console.error('FAIL smoke-home:', failures[0]);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

main();
