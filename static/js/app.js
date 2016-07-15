(function ($scope,$http){
     var app = angular.module('usuario_serv', []);
        app.controller('serviciosController', function($scope,$http) {

        this.diccs = $http.get("/API/colores_list/?format=json")
          .then(function(response) {
              var diccionarios = [];
              var dicaux = {};
              cantidad = response.data.length;
              for (i = 0; i < cantidad; i++) {
                  dicaux.nombre = response.data[i].name;
                  dicaux.descripcion = response.data[i].description;
                  dicaux.hexadeciamal = response.data[i].hexadecimal;
                  dicaux.rojo = response.data[i].red;
                  dicaux.verde = response.data[i].green;
                  dicaux.azul = response.data[i].blue;


                  diccionarios[i]=dicaux;
                  dicaux = {};
              }
              console.log(diccionarios[0]);
              return diccionarios;
          });
          console.log("hola");
          console.log(this.diccs.$$state.value);
      });
  })();
