#!/bin/bash
version=$1

rm -Rf dist
mkdir dist

if [[ -f allure-commandline.tgz ]]; then
    rm allure-commandline.tgz
fi
wget  --output-document allure-commandline.tgz https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/$version/allure-commandline-$version.tgz
tar -xf allure-commandline.tgz --strip-components=1 --directory dist
npm test
