require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'My Secret Key !';

module.exports = async function (req, res, next) {
  const token = req.headers.authorization;

  if(token !== undefined) {

    const isValid = jwt.verify(token, SECRET_KEY);
    if(isValid) {
      
      console.log(token, isValid);
      for(let i in isValid) {
        if(i in req.body === false){
          req.body[i] = isValid[i]
        } 
      }

      next();

      return;
    }
  }

  res.status(401).send({ body: 'Unauthorized' });

}