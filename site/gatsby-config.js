require('dotenv').config();
require('@babel/register')({
  presets: [
    'babel-preset-gatsby-package',
  ],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

module.exports = require('./gatsby-config.ts');
