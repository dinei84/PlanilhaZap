const puppeteer = require('puppeteer');
const { filterAndFormatDrivers } = require('./process');

async function enviarMensagem(numero, mensagem) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://web.whatsapp.com/');
    await page.waitForSelector('.logged-in');

    await page.type('.input-search input', numero);
    await page.waitForSelector('.ChatList-container .chat-list-cell');
    await page.click('.ChatList-container .chat-list-cell');

    await page.type('.editable-text .input', mensagem);
    await page.keyboard.press('Enter');

    await browser.close();
}

async function enviarMensagensParaMotoristas(drivers, mensagem) {
    const formattedDrivers = filterAndFormatDrivers(drivers);
    for (const driver of formattedDrivers) {
        try {
            await enviarMensagem(driver.phone, mensagem);
        } catch (error) {
            console.error(`Erro ao enviar mensagem para ${driver.phone}: ${error.message}`);
        }
    }
}

module.exports = {
    enviarMensagem,
    enviarMensagensParaMotoristas
};
