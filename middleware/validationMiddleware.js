const Validator = require('validator');
const isEmpty = require('is-empty');

function validationMiddleware(req, res, next) {
  let errors = {};
  const message = req.body.data.message;

  //TODO: -----------------------REDECLARING VAR FOR CHECKING
  let mymessage = !isEmpty(message) ? message : '';

  //TODO: -----------------------VALIDATOR WORK STARTS HERE

  if (Validator.isEmpty(mymessage)) {
    errors.mymessage = 'Message field is required';
  }

  if (errors.mymessage) {
    res.send(errors);
  } else {
    next();
  }
  console.log('--validated');
}
module.exports = validationMiddleware;
