pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Set up the Docker environment
                sh 'docker build -t myapp .'
            }
        }
        
        stage('Test') {
            steps {
                // Run the tests inside a Docker container
                sh 'docker run myapp npm test'
            }
        }
        
    }
}
