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
                // Run the Docker container and execute tests
                sh 'docker run --rm myapp'
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

