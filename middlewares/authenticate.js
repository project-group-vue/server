const User = require("../models/user");
const jwt = require("../helpers/jwt");

function authenticate(req, res, next) {
    try {
        const decoded = jwt.verifyToken(req.headers.token);
        console.log(decoded)
        User.findOne({
                _id: decoded.id
            })
            .then((user) => {
                if (user) {
                    req.user = decoded;
                    next();
                } else {
                    next({
                        status: 404,
                        message: 'error'
                    })
                }
            });
    } catch (err) {
        err = {
            status: 403,
            message: `You must log in first.`
        }
        next(err);
    }
}

module.exports = authenticate;