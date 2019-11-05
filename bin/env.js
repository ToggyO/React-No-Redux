const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');

const env = (() => {
  const dotenvDir = path.join(__dirname, `../.env.${process.env.NODE_ENV}`);
  const envVars = dotenv.parse(fs.readFileSync(dotenvDir));

  return {
    ...envVars,
  };
})();

module.exports = env;
