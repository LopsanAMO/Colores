
 (function (){
     var app = angular.module('usuario_serv', []);
        app.controller('serviciosController', function($scope, $http) {
         var nombre = [];
         nombre.push(extraer($http));
        console.log("hola" + nombre[0]);
         this.color = {
            name : nombres.data.name,
         };
        });

        function extraer($http) {

              $http.get("/API/colores_list/")
            .then(function(response) {
                var nombres = [];
                console.log(response.data.length);
                cantidad = response.data.length;
                for (i = 0; i < cantidad; i++) {
                    nombres.push(response.data[i].name);
                }
                //console.log(hola);
                for (j = 0; j < cantidad; j++) {
                    console.log(nombres[j]);
                }
                console.log(nombres);
                return nombres;
            });
        }
        function things(lista){
            console.log(lista);
            return lista;
        }
  })();
