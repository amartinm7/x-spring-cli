const shell = require('shelljs');

class Util{
  constructor(){}
  
  static createFolder(fullPath){
    shell.mkdir('-p', fullPath);
  }
}

module.exports = Util
