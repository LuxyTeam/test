const puppeteer = require('puppeteer');

(async () => {
  // Lanzar un navegador
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navegar a la URL deseada
  await page.goto('https://example.com');

  // Tomar una captura de pantalla
  await page.screenshot({ path: 'screenshot.png' });

  // Cerrar el navegador
  await browser.close();

  console.log('Captura de pantalla guardada como screenshot.png');
})();
