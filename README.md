# springboot-angular2-integration-poc

## Steps for project creation

### Backend
- install spring boot cli : http://docs.spring.io/spring-boot/docs/current/reference/html/getting-started-installing-spring-boot.html
- spring init --dependencies=web poc_backend

#### Run project
```
mvn spring-boot:run
```

### Frontend
- mkdir poc_frontend
- cd poc_frontend
- ng init

- Add proxy.conf.json in package.json (more info about how to configure the proxy: https://webpack.github.io/docs/webpack-dev-server.html#proxy)

- create modules and components  
ng g module core  
ng g module shared  
mkdir src\app\features  
ng g module features\feature1  
ng g module features\feature2  
ng g component core\menu  
ng g component features\feature1\backend  
ng g component features\feature1\translation

#### Run project
```
npm start
or
ng serve --proxy-config proxy.conf.json
```
