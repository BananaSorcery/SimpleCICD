def gv

pipeline {
    agent any

    stages {
        stage('init') {
            steps {
                script {
                    gv = load "script.groovy"
                }
                echo 'Init stages....'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'I am'
                sh 'whoami'
                script {
                    gv.buildImage()
                }
                echo 'Building....'
            }
        }
        stage('Push Image to Dockerhub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhubPWD')]) {
                        gv.loginDockerhub()
                        gv.pushtoDockerHub()
                    }
                }
                echo 'Pushing to DockerHub...'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    gv.deployApp()
                }
                echo 'Deploying stage...'
            }
        }
    }
    post {
        always {
            echo 'always condition script'
        }
        success {
            echo 'success condition script'
        }
        failure {
            echo 'failure condition script'
        }
    }
}
