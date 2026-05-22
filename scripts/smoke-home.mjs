/**
 * Smoke test da home (nav, galeria de memórias).
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

async function dismissCookieBanner(page) {
  const accept = page.getByRole('button', { name: 'Aceitar todos' });
  if (await accept.isVisible().catch(() => false)) {
    await accept.click();
    await page.waitForTimeout(300);
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  const failures = [];

  try {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    await waitForLoadingHidden(page);
    await dismissCookieBanner(page);

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

    // --- Galeria: lightbox + Escape ---
    await page.locator('#memorias').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: 'Ampliar foto' }).click();
    const lightbox = page.locator('.memory-lightbox');
    await lightbox.waitFor({ state: 'visible', timeout: 5000 });
    assert((await lightbox.locator('img').count()) > 0, 'Lightbox sem imagem');

    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
    assert(!(await lightbox.isVisible()), 'Lightbox não fechou com Escape');

    console.log('OK smoke-home: nav, galeria/lightbox');
  } catch (err) {
    failures.push(err instanceof Error ? err.message : String(err));
    console.error('FAIL smoke-home:', failures[0]);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

main();
