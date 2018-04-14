node {

   stage('Prepare') { // for display purposes
      // Get some code from a GitHub repository
        git 'https://github.com/kmade/nocker.git'
        sh "sed -i -e 's/TAG=.*/TAG=${env.BUILD_ID}/g' env.example"
        sh "echo '\nBUILD_ID=${env.BUILD_ID}' >> env.example"
        //sh "sed -e 's/IMAGE_REGISTRY=.*/IMAGE_REGISTRY=registry.kmade.net/g' .env"
        sh 'mv env.example .env'
        sh 'mv ./services/apps/app/env.example ./services/apps/app/.env'
        sh 'mv ./services/apps/dashboard/env.example ./services/apps/dashboard/.env'
        sh 'ls -la'
        sh 'cat .env'
   }
   stage('Build') {
        echo "Build stack"
        sh('sh ./scripts/build.sh')

       //def out = sh script: './scripts/build.sh', returnStdout: true
       //echo $out
   }
   stage('Test') {
       echo "Test stack"

   }
   stage('Publish') {
        echo "stack"
        sh('sh ./scripts/push.sh')
   }
   stage('Copy') {
        sh """
        scp docker-stack.yml pi@kmade.net:/hdd/kmade
        ssh pi@kmade.net cat /hdd/kmade/docker-stack.yml
        ssh pi@kmade.net ls -la /hdd/kmade/
        """
   }
   stage('Deploy') {
        sh('ssh pi@kmade.net TAG=${env.BUILD_ID} docker stack deploy -c /hdd/kmade/docker-stack.yml kmade --prune --resolve-image=never')
   }

}

// pipeline {
//     agent any
//     stages{
//         stage('Build'){
//             steps {
//                 sh 'mvn clean package'
//             }
//             post {
//                 success {
//                     echo 'Now Archiving...'
//                     archiveArtifacts artifacts: '**/target/*.war'
//                 }
//             }
//         }
//         stage ('Deploy to Staging'){
//             steps {
//                 build job: 'Deploy-to-staging'
//             }
//         }

//         stage ('Deploy to Production'){
//             steps{
//                 timeout(time:5, unit:'DAYS'){
//                     input message:'Approve PRODUCTION Deployment?'
//                 }

//                 build job: 'Deploy-to-Prod'
//             }
//             post {
//                 success {
//                     echo 'Code deployed to Production.'
//                 }

//                 failure {
//                     echo ' Deployment failed.'
//                 }
//             }
//         }


//     }
// }