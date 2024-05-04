node {
    def app
    def packageJson 

    stage('Cloning the ihouse ci repository') {
        checkout scm
    }

    stage('Setting the build tag') {
        script {
            packageJson = readJSON file: 'package.json'
            env.APP_VERSION = packageJson.version
        }
    }

    stage('Building the ihouse image') {
       app = docker.build("jeanfelixsagno/ihouse:${env.APP_VERSION}")
    }

    stage('Pushing the ihouse image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("${env.APP_VERSION}")
        }
    }
    
    stage('Triggering the update-ihouse-cd-manifest job') {
        echo "triggering update-ihouse-cd-manifest job"
        build job: 'update-ihouse-cd-manifest', parameters: [string(name: 'DOCKERTAG', value: env.APP_VERSION)]
    }
}