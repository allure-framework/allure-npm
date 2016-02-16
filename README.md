# Allure Commandline

[![npm version](https://img.shields.io/npm/v/allure-commandline.svg?style=flat-square)](https://www.npmjs.com/package/allure-commandline)

> NPM wrapper around allure-commandline

[Allure Commandline](http://wiki.qatools.ru/display/AL/Allure+Commandline) is a tool to generate Allure report from test results. Now you can get it installed directly from NPM.

## Install

1. Allure requires Java 7 or higher
2. `npm install -g allure-commandline --save-dev`
 
## Usage

```
allure <command> [<args>]
```
Run `alure help` for list of supported commands

# Development

Allure package should be downloaded from external storage. Repository content doesn't have actual code. 

1. Download Allure-commandline package: `./fetch-sources <version>`
2. Pubslish result to NPM: `npm publish`

