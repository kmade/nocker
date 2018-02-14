pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
               sh """
               scripts/build.sh
               """
            }
        }
    }
}