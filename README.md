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
