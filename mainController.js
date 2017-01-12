;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url = "http://httpstat.us/200";

    $scope.fetch = () => {
      requestService.get($scope.url).then((success) => {
        const response = new Response(success);
        $scope.responses.push(response);
      }, (error) => {
      });
      
//var app = angular.module('fetchApp', []);
// app.controller('MainController', function($scope){
//   $scope.fetch = ["GET", "POST", "OPTIONS", "HEAD"]

// $.ajax({
//         type: 'GET',
//         url: dataURL,
//         dataType: 'jsonp',
//         success: function (data) {
//             //insert data to page
//         }

});
    };
  });
})();

