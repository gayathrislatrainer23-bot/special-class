var jwt = require('jsonwebtoken');
const token = (req,res)=>{
    let  token1 ;
if(req.headers.autherization.startsWith('Bearer ')){
    token1 =req.headers.autherization.split(' ')[1]
}

try {
  var decoded = jwt.verify(token1, '123');
  req.user = decoded
  req.user.email
next()
} catch(err) {
  // err
}

}

module.exports = token