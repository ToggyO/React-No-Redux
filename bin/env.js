const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');

const env = (() => {
  if (!process.env.NODE_ENV) {
    const NODE_ENV = 'development';
    const dotenvDir = path.join(__dirname, `../.env.${NODE_ENV}`);
    return dotenv.parse(fs.readFileSync(dotenvDir));
  }

  const defaultEnvVariables = {
    NODE_ENV: 'development',
    HOST: '0.0.0.0',
    PORT: 3000,
    API_DOMAIN: '',
    API_VERSION: '',
  };

  const filteredEnvVariables = Object.keys(process.env).reduce((accumulator, envName) => {
    if (Object.keys(defaultEnvVariables).includes(envName)) {
      accumulator[envName] = process.env[envName];
    }
    return accumulator;
  }, {});

  return {
    ...defaultEnvVariables,
    ...filteredEnvVariables,
  };
})();

module.exports = env;
