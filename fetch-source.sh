#!/bin/bash
if [[ -d dist ]]; then
    rm -Rf dist
fi
if [[ -f allure-commandline.zip ]]; then
    rm allure-commandline.zip
fi
wget https://github.com/allure-framework/allure-core/releases/download/allure-core-$1/allure-commandline.zip
unzip allure-commandline.zip -d dist
npm version $1
