def loginDockerhub() {
    echo 'Login....'
}

def buildApp(){
    echo 'Building the images....'
    //sh 'docker build -t bananasorcery/simple-cicd:latest'
}

/* def pushtoDockerHub() {

    sh 'docker push bananasorcery/simple-cicd:latest'
} */

def testApp(){
    echo 'Testing the application..'
}

def deployApp(){
    echo 'Deploying the application...'
}