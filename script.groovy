def buildImage(){
    echo 'Cleaning old image...'
    sh 'docker rmi bananasorcery/simple-cicd:latest'
    
    echo 'Building docker image....'
    sh 'docker build -t bananasorcery/simple-cicd:latest .' //Build image from SimpleCICD folder
}

def loginDockerhub() {
    sh "Docker login -u bananasorcery -p ${dockerhubPWD}"
}

 def pushtoDockerHub() {
    sh 'docker push bananasorcery/simple-cicd:latest'
} 


def deployApp(){
    echo 'Deploying the application...'
}

return this
