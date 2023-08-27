const AppError = (message, statusCode) => {
        const err = new Error()

        err.statusCode = statusCode;
        err.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

        return err
}


module.exports = AppError;