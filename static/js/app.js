(function ($scope,$http){
     var app = angular.module('usuario_serv', []);
        app.controller('serviciosController', function($scope,$http) {
        this.nombres = [];
        this.thing = [];
        this.thing = $http.get("/API/colores_list/")
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
          console.log("algo");
          console.log(this.thing);
        function extraerx2(){

            }

        this.nombres=extraerx2();
        console.log("hola");
        console.log(this.nombres);
      });
  })();
