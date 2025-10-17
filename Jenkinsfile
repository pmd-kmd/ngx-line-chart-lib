pipeline{
    agent{
        node{
            label 'docker-agent-alpine'
        }
    }
    triggers{
        pollSCM '* /5 * * * *'
    }
    stages{
        stage('build'){
            steps{
                echo "Building...."
                sh '''
                echo "Doing build stuff.."
                sudo apt update
                sudo apt upgrade
                sudo apt install nodejs
                sudo apt install npm
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