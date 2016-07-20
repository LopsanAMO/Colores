(function(){
  var app = angular.module("appPost", []);
    app.controller("PostCtrl", function ($scope, $http) {

    $scope.Enviar = function () {
       // use $.param jQuery function to serialize data from JSON
        var data = $.param({
            hexadecimal: 'DDDDEE',
            name: $scope.name,
            description: $scope.description,
            green: $scope.green,
            red: $scope.red,
            blue: $scope.blue,

        });
        console.log(data);
        var config = {
            headers : {
                   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http.post('/API/create', data, config)
          .success(function (data, status, headers, config) {
              $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
              $scope.ResponseDetails = "Data: " + data +
                "<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };

});
})();
