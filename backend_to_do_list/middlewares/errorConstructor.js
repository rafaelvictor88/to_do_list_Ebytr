const ERROR_BAD_REQUEST = {
  status: 400,
  message: { message: 'Invalid entries. Try again.' },
};

const ERROR_USER_ALREADY_EXISTS = {
  status: 409,
  message: { message: 'Email already registered' },
};

const ERROR_ALL_FIELDS_NOT_FILLED = {
  status: 401,
  message: { message: 'All fields must be filled' },
};

const ERROR_EMAIL_OR_PASSWORD_INVALID = {
  status: 401,
  message: { message: 'Incorrect username or password' },
};

const ERROR_TOKEN_INVALID = {
  status: 401,
  message: { message: 'jwt malformed' },
};

const ERROR_NOT_FOUND = {
  status: 404,
  message: { message: 'recipe not found' },
};

module.exports = {
  ERROR_BAD_REQUEST,
  ERROR_USER_ALREADY_EXISTS,
  ERROR_ALL_FIELDS_NOT_FILLED,
  ERROR_EMAIL_OR_PASSWORD_INVALID,
  ERROR_TOKEN_INVALID,
  ERROR_NOT_FOUND,
};