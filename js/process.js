const _ = require('lodash');

function formatPhoneNumber(phone) {
    // Remove caracteres não numéricos
    const cleaned = ('' + phone).replace(/\D/g, '');
    // Formata de acordo com o padrão do WhatsApp
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
        return `+55${match[1]}${match[2]}${match[3]}`;
    }
    return null;
}

function filterAndFormatDrivers(drivers) {
    return _.chain(drivers)
        .map(driver => {
            const formattedPhone = formatPhoneNumber(driver.phone);
            if (formattedPhone) {
                return { ...driver, phone: formattedPhone };
            }
            return null;
        })
        .compact()
        .value();
}

module.exports = {
    formatPhoneNumber,
    filterAndFormatDrivers
};
