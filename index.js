var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;
var javaPath;

if(process.env.JRE_HOME) {
    javaPath = process.env.JRE_HOME + '/bin/java';
} else if(process.env.JAVA_HOME) {
    javaPath = process.env.JAVA_HOME + '/bin/java';
} else {
    javaPath = 'java';
}

fs.statSync(javaPath);

var allureHome = path.join(__dirname, 'dist');
var allureClasspath = path.join(allureHome, 'lib', '*') + ':' + path.join(allureHome + '/conf');
var command = "${JAVA} ${JAVA_ARGS} -cp \"${ALLURE_CP}\" ${ALLURE_ARGS} ${ALLURE_MAIN} $@"

spawn(javaPath, [
    '-cp "'+ allureClasspath +'"',
    'ru.yandex.qatools.allure.CommandLine',
    '-Dallure.home='+allureHome
].concat(process.argv.slice(1)), {
    stdio: 'inherit'
});
