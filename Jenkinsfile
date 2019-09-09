pipeline {
    agent { label 'docker' }
    environment {
        HOME = pwd()
    }
    parameters {
        booleanParam(name: 'RELEASE', defaultValue: false, description: 'Perform release?')
        string(name: 'RELEASE_VERSION', defaultValue: '', description: 'Release version')
    }
    stages {
        stage('Download dist') {
            steps {
                sh 'cdr=$(pwd); ls -l $cdr; $cdr/fetch-source.sh'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Release') {
            when { expression { return params.RELEASE } }
            steps {
                withCredentials([usernamePassword(credentialsId: 'qameta-ci_npm',
                        usernameVariable: 'NPM_USER', passwordVariable: 'NPM_PASS')]) {
                    sshagent(['qameta-ci_ssh']) {
                        sh 'git checkout master && git pull origin master'
                        sh 'npm install -g npm-cli-login'
                        sh 'npm-cli-login -e ci@qameta.io'
                        sh 'npm version ${RELEASE_VERSION}'
                        sh 'cdr=$(pwd); ls -l $cdr; $cdr/fetch-source.sh'
                        sh 'npm test'
                        sh 'npm publish'
                    }
                }
            }
        }
    }
    post {
        always { deleteDir() }
    }
}
