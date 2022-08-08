# Informações Gerais do Projeto

### Projeto iniciado em 30/Julho/2022 

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

## Endereços dos serviços
- Porta do serviço frontend: 3000
- Porta do serviço backend: 3001

## Estrutura Inicial do Projeto:

[Link video - Estrutura Inicial do Projeto ](https://www.youtube.com/watch?v=lJjC97FPeIM)

Um diretorio default engloba toda a aplicação e os dois serviços: de frontend e de backend. 
Cada um dos serviços está em um diretório separado e em um respectivo container. Caso seja necessário adicionar ou remover pacotes, deve-se acessar o respectivo container de cada serviço.

### Foram instalados/iniciados/criados:

Na raiz do projeto: git, .gitignore, docker-compose.yml.
No frontend: React, Dockerfile, .dockerignore, Eslint, axios.
No backend: npm init, Dockerfile, .dockerignore, Eslint, express, nodemon, index.js, cors.

### Passos para a Criação da Estrutura:

- Criar o diretorio raiz
- comando:  git init
  → ls -a lista os diretórios ocultos, para verificar se existe o .git
- criar o arquivo .gitignore
  Para que o .gitignore ignore todos os node modules do projeto:
    → comando:  *node_modules
- criar os diretorios frontend e backend.

### Dentro do Diretório Frontend:

→ npx create-react-app .  (para já criar a estrutura react dentro da pasta frontend) 
→ comando: npm start - para validar que está funcionando
- criar o arquivo Dockerfile dentro do diretorio de frontend
- escrever o conteúdo do Dockerfile no frontend
- criar o arquivo .dockerignore no frontend e popular ele com o que deve ser ignorado
- criar no diretorio raiz o arquivo docker-compose
- rodar o docker-compose (na raiz), comando: docker-compose up -d
- Instalar o linter para o frontend, 
  - comando: -> npm install eslint -D
  - conferir se no package.json o Eslint esta em devDependencies
- configurar o Eslint, comando: → npm init @eslint/config
  seguir as configurações:
    1. To check syntax, find problems, and enforce code style
    2. JavaScript modules (import/export)
    3. React
    4. TypeScript? No
    5. rodar no Browser
    6. use a popular style guide
    7. Airbnb
    8. JSON
    9. yes (install now)
- incluir no package.json o script para rodar o Lint:
    ```json
    "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json ."
    ```
- rodar o Lint, comando: → npm run lint
- corrigir os erros apontados pelo Lint
- instalar o axios, comando: npm install axios
- criar uma pasta “services” dentro da pasta “src”
- dentro de “services”, criar o arquivo index.js
- popular o arquivo index.js com as informações necessárias para linkar o front com o back
- editar o arquivo app.jsx para chamar a funcao criada

### Dentro do Diretório Backend:

- rodar o comando: npm init
- configurar o script de start no package Json
- configurar o dockerfile desse serviço.
- criar o arquivo .dockerignore no frontend e popular ele com o que deve ser ignorado
- atualizar o docker-compose no diretorio raiz
- rodar o docker-compose para ver se está funcionando.
- instalar o express, comando: npm i express
- instalar o nodemon, comando: npm i nodemon -D
- adicionar no package.json o script de dev: nodemon . 
    ```json
    "dev": "nodemon .",
    ```
- Instalar o linter para o backend, 
- comando: -> npm install eslint -D
- conferir se no package.json o Eslint esta em devDependencies
- configurar o Eslint, comando: → npm init @eslint/config
  seguir as configurações:
    1. To check syntax, find problems, and enforce code style
    2. CommonJS (require/export)
    3. none
    4. TypeScript? No
    5. rodar no Node
    6. use a popular style guide
    7. Airbnb
    8. JSON
    9. yes (install now)
- incluir no package.json o script para rodar o Lint:
    ```json
    "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json ."
    ```
- Popular o arquivo index.js de forma que possibilite a conexão do front com o back

### Para fazer tudo rodar:

- comando: docker-compose up -d