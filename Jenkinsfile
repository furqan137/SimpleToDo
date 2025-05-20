pipeline {
    agent {
        docker {
            image 'node:18-alpine'
        }
    }
    
    stages {
        stage('Setup') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Docker Build') {
            steps {
                sh 'docker build -t todo-app:${BUILD_NUMBER} .'
            }
        }
        
        stage('Integration Tests') {
            steps {
                sh 'docker-compose -f docker-compose.ci.yml up --build --exit-code-from app'
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to production environment...'
                // Add your deployment steps here
            }
        }
    }
    
    post {
        always {
            sh 'docker-compose -f docker-compose.ci.yml down -v'
            cleanWs()
        }
    }
}