const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {
  const { token } = req.cookies;

  if(token !== undefined) {

    const isValid = jwt.verify(token, 'HHHHHHHHHHH');
    if(isValid) {

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