pipeline {
  
  agent any

  stages {
    stage('Clean workspace') {
      steps{
        script { 
          sh "rm -rf *"
        }
      }
    }
   stage('Checkout'){
            steps{
                git branch: 'main' , url: 'https://github.com/Aar-if/Student-Stories.git'   
            }
        }
    
    stage('BuildingCode') {
      steps{
      dir('/var/lib/jenkins/workspace/Storiesapp-student'){
        sh "rm -rf node_modules"
        sh "rm -rf package-lock.json"
        sh "ls"
        //sh "npm i --legacy-peer-deps"
        sh "npm i --legacy-peer-deps"
        sh "npm run build"
        }
      }
    }
    stage('Deployment') {
      steps{
      dir ('/var/lib/jenkins/workspace/Storiesapp-student/dist/') { 
         script {
                   
                    def awsCliCmd = 'aws'
                         
                    def bucketName = 'onest-storiesapp'  
                    sh "aws s3 cp /var/lib/jenkins/workspace/Storiesapp-student/dist/index.html s3://${bucketName}/"
                     sh "aws s3 cp /var/lib/jenkins/workspace/Storiesapp-student/dist/vite.svg s3://${bucketName}/"
                     sh "aws s3 cp /var/lib/jenkins/workspace/Storiesapp-student/dist/assets/ s3://${bucketName}/assets/ --recursive"
        }
      }
    }
    }
    // New stage for executing ccs.sh script
    stage('Execute invalidation Script') {
      steps {
        dir('/var/lib/jenkins/workspace'){
        sh 'cd /var/lib/jenkins/workspace'
        sh 'sh storiesapp.sh'
        }
      }
    }
  }
}
