# My Daily Status
Aplicativo escrito em React usando Next no modo SSR (Server Side Rendering)

Projeto Publicado em: https://mydailystatus.joliveira-git.now.sh

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

- Rotina para cálculo da distância entre dois pontos considerando a latitude e longitude:
O cálculo é chamado de fórmula haversine , que calcula a distância entre dois pontos em uma esfera enquanto o "corvo voa".

https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates

    //alert(calcCrow(59.3293371,13.4877472,59.3225525,13.4619422).toFixed(1));

    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }

    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    function calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

Pode-se mostrar os pontos no mapa: Google-map-react
https://github.com/google-map-react/google-map-react

Publicação:
Projeto publicado no Zeit.co (empresa que criou e mantém o next)

- Now-Cli: ferramenta que permite subir o projeto para o Zeit
sudo npm install -g now@latest
autenticar com o usuário do git-hub
- Para saber quem está logado:
now whoami
- Para deslogar:
now logout
- Para logar:
now login

para colocar algo no ar:
now 

incluir as informações sigilosas de autenticação do Auth0 criando segredos para cada variável de ambiente:
now secrets add auth0-client-id valor-a-ser-armazenado
now secrets add auth0-client-secret valor-a-ser-armazenado
now secrets add auth0-redirect-uri https://dominio-zeit-aplicacao/rota-de-callback
now secrets add auth0-logout-redirect-uri https://dominio-zeit-aplicacao
ficar atento pq há um domínio de produção e outro de projeto que é gerado a cada vez que se sobe o projeto.

criar o arquivo now.json para mapear as variáveis de ambiente com as secrets do zeit (usar @nome-secret)
rodar now novamente para compilar o projeto e subir para a produção

Ao realizar o teste da aplicação: internal server error
Acrescentar o domínio da aplicação na lista de URLs de Callback e Logout do Auth0.

Para subir para a produção
now --prod

É possível personalizar a tela de login do Auth0 em Universal Login (por exemplo: usar copy image addres do logo a aplicação)
