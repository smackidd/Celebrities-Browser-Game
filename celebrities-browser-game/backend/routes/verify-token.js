const jwt = require('jsonwebtoken');

module.exports = function(req,res,next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        ////
        //
        //to request info about the user in other API's just
        //call for User.findbyOne({_id: req.user}) to get back
        //info from the mongoDB
        //
        ////
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid token');
    }
} 