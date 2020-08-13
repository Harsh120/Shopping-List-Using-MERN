const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    if(!token) 
        return res.status(401).json({ msg: "No token, Unauthorized token" });

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded;
        next();
    }catch(e) {
        res.status(404).json({ msg: "Token is Not valid" });
    }
}

module.exports = auth;