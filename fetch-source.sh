#!/bin/bash
version=$1

rm -Rf dist
mkdir dist

if [[ -f allure-commandline.tgz ]]; then
    rm allure-commandline.tgz
fi
wget  --output-document allure-commandline.tgz https://dl.bintray.com/qameta/generic/io/qameta/allure/allure/$version/allure-$version.tgz
tar -xf allure-commandline.tgz --strip-components=1 --directory dist
npm test
