# My Daily Status
Aplicativo escrito em React usando Next no modo SSR (Server Side Rendering)

Para rodar a aplicação: npm run dev

Tecnologias utilizadas:
- Next para SSR

- TailwindCSS para formatação CSS

- Utiliza Auth0 para autenticação
  domínio: joliveira-dev.auth0.com
  Integrate Auth0 into your application / Regular Web Applications
  $ npm install @auth0/nextjs-auth0
  
- DotEnv para Gerenciamento de variáveis de ambiente
  $npm install dotenv
  
- Banco de dados Firebase 
  FireStore: DB NoSql Documents e Colections
  /markers/2020-04-10/checks/userId
  Cloud FireStore
  npm install firebase-admin
  para rodar o teste do banco de dados: 
  node test-db.js
  
- Geofirestore para usar geolocalização (camada em cima do db)
  npm install geofirestore
  Gera o Geo Hash para não precisar tratar diretamente as coordenadas
  
 -Axios como cliente HTTP
  npm install axios
