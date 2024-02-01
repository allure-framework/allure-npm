#!/usr/bin/env node
var path = require('path');
var isWindows = path.sep === '\\';
var allureCommand = 'allure' + (isWindows ? '.bat' : '');

module.exports = function(args) {
    const binPath = path.join(__dirname, 'dist/bin', allureCommand);
    const binPathContainsSpaces = binPath.indexOf(' ') !== -1;

    return require('child_process').spawn(binPathContainsSpaces ? `"${binPath}"` : binPath, args, {
        env: process.env,
        stdio: 'inherit'
    });
}
