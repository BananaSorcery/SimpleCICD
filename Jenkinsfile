pipeline {
    agent any

    stages {
        stage('init') {
            steps {
                /* script {
                    gv = load "script.groovy"
                    gv.loginDockerhub()
                } */
                echo 'Init stages....'
            }
        }
        stage('Build images') {
            steps {
                /* script {
                    //gv.buildApp()
                } */
                echo 'Building the images....'
            }
        }
        stage('Test') {
            steps {
                /* script {
                    gv.testApp()
                } */
                echo 'Testing the application..'
            }
        }
        stage('Deploy') {
            steps {
                /* script {
                    gv.deployApp()
                } */
                echo 'Deploying the application...'
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