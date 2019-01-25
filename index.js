#! /usr/bin/env node

const mason = require('commander');
const { version } = require('./package.json');
const console = require('console');
const camelCase = require('lodash.camelcase')

const chalk = require('chalk');
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const info = chalk.keyword('cyan');


// commands, add as many as you wish
const CreateResources = require('./src/commands/create');

function generateKeyWords(fullClassName, templateType) {
  const index = fullClassName.lastIndexOf(".")
  const packageName = fullClassName.substring(0, index)
  const className = fullClassName.substring(index + 1).replace(/Controller/g,'').replace(/Service/g,'').replace(/Model/g,'') || 'SomeClass'
  const attributeName = camelCase(className)
  const folderDest = packageName.split('.').join('/')
  const outputPath = 'build/' + folderDest
  return {packageName,className,attributeName,folderDest,outputPath,templateType}
}

mason
  .version(version);

mason
  .command('createController <className>')
  .description('creates a new controller')
  .action((className)=> {
    const keyWords = generateKeyWords(className, 'controller')
    console.log(info('creating controllers in path... %s'), keyWords.outputPath)
    new CreateResources(keyWords).run()
  });

mason
  .command('createService <className>')
  .description('creates a new service')
  .action((className)=> {
    const keyWords = generateKeyWords(className, 'service')
    console.log(info('creating services in path... %s'), keyWords.outputPath)
    new CreateResources(keyWords).run()
  });

mason
  .command('*')
  .action(() => {
    mason.help();
  });

mason.parse(process.argv);

if (!mason.args.length) {
  console.log(warning('Please, read the instruccions before keep on working...'))
  mason.help();
}

