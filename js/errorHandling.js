function handleInvalidNumber(phone) {
    console.warn(`Número inválido: ${phone}`);
    // Atualizar banco de dados para marcar como inválido (implementação depende do sistema)
}

function handleTemporaryBlock(phone) {
    console.warn(`Bloqueio temporário para o número: ${phone}`);
    // Implementar mecanismo de retry (tentativa após um período)
}

function handleCommunicationFailure(error) {
    console.error(`Falha na comunicação: ${error.message}`);
    // Registrar o erro e tentar novamente mais tarde
}

module.exports = {
    handleInvalidNumber,
    handleTemporaryBlock,
    handleCommunicationFailure
};
