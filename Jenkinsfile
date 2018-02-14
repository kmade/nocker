pipeline {
    agent any
    stages {
        stage('Build') {
            steps {

               sh """
               pwd
               docker-compose -f docker-compose.yml -f docker-compose.override.yml -f configuration/docker/docker-compose.prod.yml -f configuration/docker/arm/docker-compose.arm32.yml build --force-rm
               """
            }
        }
    }
}