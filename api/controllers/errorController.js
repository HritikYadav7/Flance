const { error } = require("console");
const AppError = require("../utils/AppError");


module.exports = (err, req, res, next) => {
    // console.log(err.stack);
  
    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 500;
   
    return AppError(err.status, err.statusCode)
};
  