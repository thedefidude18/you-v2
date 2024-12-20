const logInfo = (message) => console.log(`[INFO] ${message}`);
const logError = (message, error) => console.error(`[ERROR] ${message}`, error);

module.exports = { logInfo, logError };
