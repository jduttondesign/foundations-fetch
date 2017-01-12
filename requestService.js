;(function () {
  angular.module('fetchApp').service('requestService', function ($http) {
    this.get = (url) => $http.get(url);
  	});
})();

// $.ajax({
//         type: 'GET',
//         url: dataURL,
//         dataType: 'jsonp',
//         success: function (data) {
//             //insert data to page
//         }