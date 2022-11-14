pipeline {
    agent any

    stages {
        stage('init') {
            steps {
                script {
                    gv = load "script.groovy"
                    //gv.loginDockerhub()
                }
            }
        }
        stage('Build images') {
            steps {
                script {
                    gv.buildApp()
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    gv.testApp()
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    gv.deployApp()
                }
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