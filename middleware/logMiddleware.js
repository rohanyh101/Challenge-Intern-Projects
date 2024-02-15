const logMiddleware = (req, res, next) => {
    const timeStamp = new Date().toISOString();
    const accessToken = req.headers.authorization || "No Access Token";

    console.log(`[${timeStamp}] ${req.method}: ${req.url}, Access Token: ${accessToken}`);
    next();
}

module.exports = logMiddleware;