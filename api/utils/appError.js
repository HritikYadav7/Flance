const createError = (message, status) => {
    const err = new Error();
    err.message = message||"Something went wrong!!!";
    err.status = status;
    return err;
};
    
module.exports = createError;