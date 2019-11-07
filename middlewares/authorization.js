const Article = require("../models/article.js");

function authorization(req, res, next) {
    Article.findById(req.params.id)
        .then((found) => {
            if (found) {
                if (found.userId == req.user.id) {
                    next();
                } else {
                    let err = {
                        status: 401,
                        messages: `You are not authorized.`
                    }
                    next(err);
                }
            } else {
                let err = {
                    status: 404,
                    messages: `Article not found.`
                }
                next(err);
            }
        })
        .catch((err) => {
            next(err);
        });
}

module.exports = authorization;