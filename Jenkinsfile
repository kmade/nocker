// node {

//    stage('Prepare') { // for display purposes
//       // Get some code from a GitHub repository
//         git 'https://github.com/kmade/nocker.git'
//         sh "sed -e 's/TAG=.*/TAG=${env.BUILD_ID}/g' env.example"
//         sh "echo '\nBUILD_ID=${env.BUILD_ID}' >> env.example"
//         //sh "sed -e 's/IMAGE_REGISTRY=.*/IMAGE_REGISTRY=registry.kmade.net/g' .env"
//         sh 'mv env.example .env'
//         sh 'ls -la'
//         sh 'cat .env'
//    }
//    stage('Build') {
//        echo "Build stack"

//         sh('sh ./scripts/build.sh')

//        //def out = sh script: './scripts/build.sh', returnStdout: true
//        //echo $out
//    }
//    stage('Test') {
//        echo "Test stack"
//         //sh "docker ps -a"
//         //sh "docker-compose -f docker-compose.yml -f docker-compose.override.yml -f configuration/docker/docker-compose.prod.yml -f configuration/docker/arm/docker-compose.arm32.yml build proxy"
//    }
//    stage('Publish') {
//        echo "stack"
//         //sh "docker ps -a"
//         //sh "docker-compose -f docker-compose.yml -f docker-compose.override.yml -f configuration/docker/docker-compose.prod.yml -f configuration/docker/arm/docker-compose.arm32.yml build proxy"
//    }
//    stage('copy') {
//         sh """
//         scp docker-stack.yml pi@kmade.net:/hdd/kmade
//         ssh pi@kmade.net cat /hdd/kmade/docker-stack.yml
//         ssh pi@kmade.net ls -la /hdd/kmade/
//         """
//    }
//    stage('deploy') {
//         sh """
//         ssh pi@kmade.net docker images
//         """
//    }

// }


pipeline {
    agent any
    stages{
        stage('Build'){
            steps {
                sh 'mvn clean package'
            }
            post {
                success {
                    echo 'Now Archiving...'
                    archiveArtifacts artifacts: '**/target/*.war'
                }
            }
        }
        stage ('Deploy to Staging'){
            steps {
                build job: 'Deploy-to-staging'
            }
        }

        stage ('Deploy to Production'){
            steps{
                timeout(time:5, unit:'DAYS'){
                    input message:'Approve PRODUCTION Deployment?'
                }

                build job: 'Deploy-to-Prod'
            }
            post {
                success {
                    echo 'Code deployed to Production.'
                }

                failure {
                    echo ' Deployment failed.'
                }
            }
        }


    }
}