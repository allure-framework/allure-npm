#!/usr/bin/env node
var path = require("node:path");

function escapeCMDArg(arg) {
  if (/[\r\n]/.test(arg)) throw new Error("Invalid character in argument");
  return `"${arg
    .replace(/\\+(?="|$)/g, "$&$&")
    .replace(/"/g, '""')
    .replace(/%/g, "%%cd:~,%")}"`;
}

module.exports = function (args) {
  var process = require("node:process");
  var childProcess = require("node:child_process");
  if (process.platform === "win32") {
    let command = path.join(__dirname, "dist/bin/allure.bat");
    return childProcess.spawn(
      "cmd.exe",
      ["/E:ON", "/F:OFF", "/V:OFF", "/d", "/s", "/c", `"${[command, ...args].map(escapeCMDArg).join(" ")}"`],
      {
        env: process.env,
        stdio: "inherit",
        shell: false,
        windowsVerbatimArguments: true,
      },
    );
  }

  return childProcess.spawn(path.join(__dirname, "dist/bin/allure"), args, {
    env: process.env,
    stdio: "inherit",
  });
};
