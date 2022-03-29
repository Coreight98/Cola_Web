pipeline {
    agent any
    tools {
        nodejs "node14"
        git "git"
    }
    stages {
        stage('prepare') {
            steps {
                echo 'prepare'
                 git branch: "${BRANCH}", credentialsId: "GIT_ACCOUNT", url: 'https://github.com/Coreight98/Cola_Web.git'
                 sh  'ls -al'
            }
        }
        stage('build') {
            steps {
                    dir('myapp'){
                        sh 'ls -al'
                        sh "yarn install"
                        sh "CI=false yarn build"
                }
            }
        }
        stage('deploy') {
            steps {
                sh "ls -al"
                echo 'deploy'   
            }
        }
    }
}