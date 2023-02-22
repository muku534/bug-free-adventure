const jwt = require ('jsonwebtoken');
const User = require('../model/UserDetails');

const Authentication = async(req,res,next) =>{
    try{

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id:verifyToken._id, "tokens.token": token});

        if(!rootUser){throw new Error('User not Found')}
        req.token = token;
        req.rootUser = rootUser;
        res.userID = rootUser._id;

        next(); 

    }catch(err){
        res.status(401).send("Unauthorized:No token provided");
        console.log(err);
    }

}

module.exports = Authentication;










// const jwt = require ('jsonwebtoken');


// /** auth middleware */
//  async function Auth(req, res, next){
//     try {
        
//         // access authorize header to validate request
//         const token = req.headers.authorization.split(" ")[1];

//         // retrive the user details fo the logged in user
//         const decodedToken = await jwt.verify(token, ENV.JWT_SECRET);

//         req.user = decodedToken;

//         next()

//     } catch (error) {
//         res.status(401).json({ error : "Authentication Failed!"})
//     }
// }
// module.export = {Auth};


// function localVariables(req, res, next){
//     req.app.locals = {
//         OTP : null,
//         resetSession : false
//     }
//     next()
// }
// module.export = {localVariables};