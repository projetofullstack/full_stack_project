# Informações Gerais do Projeto

## Como usar a aplicação utilizando o Docker compose
[Link video - Subindo e parando os serviços](https://www.youtube.com/watch?v=XUQ7XE0dykA)
````
docker-compose up -d // indicado para subir os serviços na primeira vez para ter uma visão de tudo que aconteceu
docker-compose up -d // para subir os serviços em background
docker-compose down // para parar os serviços
docker-compose ps // para verificar se os serviços estão rodando
docker-compose logs // para verificar o log dos serviços
docker-compose exec -it frontend bash // para acessar o container do serviço frontend
docker-compose exec -it backend bash  // para acessar o container do serviço backend
````

[Link video - Configurações inicias do docker-compose](https://www.youtube.com/watch?v=TdmMbss30_g)

## Endereço dos serviços
- Porta do serviço frontend: 3000
- Porta do serviço backend: 3001

