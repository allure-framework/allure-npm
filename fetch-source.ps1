# Get version from package.json
$version = node -p "require('./package.json').version"

# Remove dist directory if it exists and create a new one
if(Test-Path -Path dist) {
    Remove-Item -Path dist -Recurse -Force
}
New-Item -ItemType Directory -Path dist

# Remove allure-commandline.zip if it exists
if(Test-Path -Path allure-commandline.zip) {
    Remove-Item -Path allure-commandline.zip -Force
}

# Download allure-commandline.zip from Maven repository
Invoke-WebRequest -Uri "https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/$version/allure-commandline-$version.zip" -OutFile allure-commandline.zip

# Extract allure-commandline.zip to dist directory
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::ExtractToDirectory('allure-commandline.zip', 'dist')

# List files in current directory
Get-ChildItem -Path .