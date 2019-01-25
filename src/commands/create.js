const fs = require('fs');
const replace = require('stream-replace');
const util = require('./util');
const chalk = require('chalk');
const info = chalk.keyword('cyan');

class CreateResources{
  
  constructor(keyWords){
    this.keyWords = keyWords
  }
  
  run(){
    const templatesFolder = __dirname  + '/../templates/' + this.keyWords.templateType
    util.createFolder(this.keyWords.outputPath)
    fs.readdirSync(templatesFolder).forEach(templateName => {
      const outputFileName = `${this.keyWords.outputPath}/${this.keyWords.className}${templateName}`
      const templatePath = `${templatesFolder}/${templateName}`
      fs.createReadStream(templatePath)
        .pipe(replace(/{{className}}/ig, this.keyWords.className))
        .pipe(replace(/{{attributeName}}/ig, this.keyWords.attributeName))
        .pipe(replace(/{{packageName}}/ig, this.keyWords.packageName))
        .pipe(fs.createWriteStream(outputFileName))
      console.log(info(outputFileName))
    })
  }
}

module.exports = CreateResources
