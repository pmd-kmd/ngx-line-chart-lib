pipeline{
    agent{
        node{
            label 'docker-agent-alpine'
        }
    }
    triggers{
        pollSCM('H/5 * * * *')
    }
    stages{
        stage('build'){
            steps{
                echo "Building...."
                sh '''
                echo "Doing build stuff.."
                apk update
                apk add --no-cache nodejs npm
                npm install -g @angular/cli
                cd charts
                npm install
                '''
            }
        }
        stage('Test'){
            steps{
                echo "Testing...."
                sh '''
                echo "Doing test stuff.."
                '''
            }
        }
        stage('Deliver'){
            steps{
                echo "Delivring...."
                sh '''
                echo "Doing deliver stuff.."
                '''
            }
        }
    }
}