# Allure Commandline

[![npm version](https://img.shields.io/npm/v/allure-commandline.svg?style=flat-square)](https://www.npmjs.com/package/allure-commandline)

> NPM wrapper around allure-commandline

[Allure Commandline](http://wiki.qatools.ru/display/AL/Allure+Commandline) is a tool to generate Allure report from test results. Now you can get it installed directly from NPM.

## Install

1. Allure requires [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html) or higher
2. `npm install -g allure-commandline --save-dev`

## Usage

```
allure <command> [<args>]
```
Run `allure help` for list of supported commands

## Node.js API

You can also call Allure commands from your Node.js code:

```js
var allure = require('allure-commandline');

// returns ChildProcess instance
var generation = allure(['generate', 'allure-results']);

generation.on('exit', function(exitCode) {
    console.log('Generation is finished with code:', exitCode);
});
```

# Development

Allure package should be downloaded from external storage. Repository content doesn't have actual code.

1. Download Allure-commandline package: `./fetch-sources <version>`
2. Update package version `npm version 2.0.0-BETAX` (because NPM require triple numbers in version, like 0.0.0)
3. Pubslish result to NPM: `npm publish --tag beta` (while Allure2 is not stable)

