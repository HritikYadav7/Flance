const { error } = require("console");
const AppError = require("../utils/appError");


module.exports = (err, req, res, next) => {
    // console.log(err.stack);
  
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
   
    return AppError(err.status, err.statusCode)
};
  