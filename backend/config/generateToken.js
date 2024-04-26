const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'saurabh', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
