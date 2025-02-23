var path = require('path');

/**
 *
 * @param {string[]} args
 */
module.exports = function(args) {
    return require('batspawn').spawn(path.join(__dirname, 'dist/bin', 'allure'), '.bat', args, {
        env: process.env,
        stdio: 'inherit',
    });
}
