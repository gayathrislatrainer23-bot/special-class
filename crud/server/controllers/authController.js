var jwt = require('jsonwebtoken');
const userLogin = async (req,res)=>{
    // check username and password
    // if true
const token = await jwt.sign( 'jwtkey', { expiresIn: 60 * 60 });

res.status(201).json({
    msg:"login Sucess",
    token
  
})
}



module.exports={
    userLogin
}