const ErrorHandler = require("../utils/error-handler");


const errorMiddleware = (err, res, req, next) => {
    if (err instanceof ErrorHandler) {
        return res.status(err.status).json({ message: err.message, errors: err.errots })
    }

    console.log(err);
    res.status(500).json({message: 'Internal server error, try again later'})
}

module.exports = errorMiddleware;