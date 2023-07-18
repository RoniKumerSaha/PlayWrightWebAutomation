pipeline {
    agent any

    stages {
        stage('Build docker image') {
            steps {
                // Checkout source code from version control
                checkout scm
                
                // Build the Docker image
                sh 'docker build -t myapp .'
            }
        }

        stage('Test') {
            steps {
                // Run the Docker container and execute tests and save logs
                sh 'docker run myapp > logs.txt'
            }
        }

        stage('Cleanup') {
            steps {
                // Clean up Docker resources
                sh 'docker rmi myapp'
            }
        }
    }
}

