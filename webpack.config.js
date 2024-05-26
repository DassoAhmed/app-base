const { dir } = require('console');
const path = require('path');

module.exports = {
  mode:'development',
  devtool:'dasso-source-map',
  entry:'./src/index.js',
  output:{
    path:path.resolve(--path.dirname,'dist'),
    __filename:'bundle.js'
  }
};