pipeline {
    agent any
    parameters {
        choice(name, 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeBuild', defaultValue: true, description: '')
    }
    stages {
        stage('init') {
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }
        stage('Build') {
            when {
                expression {
                    params.executeBuild == true
                }
            }
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