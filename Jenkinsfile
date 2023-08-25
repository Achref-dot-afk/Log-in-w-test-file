pipeline{
    agent any
    environment{
        DOCKERHUB_USERNAME = 'achref2h'
        DOCKERHUB_PASSWORD = 'achreflolh1bli'
    }
    stages{
        stage("Build"){
            steps{
                sh 'npm install'
                echo 'Build done'
            }
        }
        stage("Test"){
            steps{
                sh 'npm test'
                echo 'testing done'
            }
        }
    }
    post{
        success{
            echo("Logging to docker hub")
            sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
            echo 'Logged in successfully'
            sh 'docker build -t $DOCKERHUB_USERNAME/log-in-docker:lts .'
            echo 'Image built successfully'
            sh 'docker push $DOCKERHUB_USERNAME/log-in-docker:lts'
            echo 'Image pushed successfully'
        }
        failure{
            echo 'Failed in testing'
        }
    }
}
