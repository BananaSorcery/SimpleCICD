# SimpleCICD
Simple CI/CD project in which will automating these following tasks: containerized app to create docker image, build image, push image to Docker Hub and finally deploy app on Azure.

- App deploy on: simplecicd-demo.azurewebsites.net (Not working! Out of Azure subcription)
- Docker hub image: hub.docker.com/repository/docker/bananasorcery/simple-cicd
- Jenkins Server IP: 20.168.199.26:8080 [username: guest, password: 1] (Not working! Out of Azure subcription)

<strong>To run webapp on localhost:51000, do these following steps:</strong>
1. Pull image from Docker hub  
&nbsp;&nbsp;&nbsp;&nbsp;`docker pull bananasorcery/simple-cicd`
3. Start webapp using docker compose  
&nbsp;&nbsp;&nbsp;&nbsp;`docker compose up -d`
