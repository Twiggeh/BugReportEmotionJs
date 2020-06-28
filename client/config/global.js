const BACKEND_PORT = 5000;
const BACKEND_ADDRESS = 'http://localhost';
const BACKEND_URL = `${BACKEND_ADDRESS}:${BACKEND_PORT}`;
const CLIENT_URL = 'http://localhost:8080';
const ALLOWED_METHODS = ['local', 'google'];

module.exports = {
  BACKEND_PORT,
  BACKEND_ADDRESS,
  BACKEND_URL,
  CLIENT_URL,
  ALLOWED_METHODS,
};
