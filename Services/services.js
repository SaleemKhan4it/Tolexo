//angular.module("tolexo", ['ngRoute'])
app.controller('movies', function($scope, $http) {
	$scope.url =  'https://andruxnet-random-famous-quotes.p.mashape.com?cat=movies&count=10';
	var genderReq = {
      method: 'post',
      url: $scope.url,
      headers: {
        "X-Mashape-Key": "1IIhpykY5LmshmwYBNaXfjliTzn9p1xCjKWjsn6M56b9KQR4Q0",
        "Accept": "application/json" 
      }
    };
	
	$http(genderReq).then(function(response){
		console.log(response);
  })
});
