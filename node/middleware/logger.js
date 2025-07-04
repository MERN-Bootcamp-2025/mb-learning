module.exports = function looger(req,res,next){
    console.log(`[${req.method}] ${req.originalUrl}`);
    next();
}