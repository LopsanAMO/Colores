
 (function (){
     var app = angular.module('usuario_serv', []);
        app.controller('serviciosController', function($scope, $http) {
        nombres = extraer($http);
        console.log("hola");
        console.log(extraer($http).nombres[0]);
         this.color = {
            name : nombres.data.name,
         };
        });

        function extraer($http) {
            var nombres = [];
              $http.get("/API/colores_list/")
            .then(function(response) {
                console.log(response.data.length);
                cantidad = response.data.length;
                for (i = 0; i < cantidad; i++) {
                    nombres.push(response.data[i].name);
                }
                //console.log(hola);
                for (j = 0; j < cantidad; j++) {
                    console.log(nombres[j]);
                }
                return nombres;
            });

            //console.log("hola " + comida);

        }
  })();
