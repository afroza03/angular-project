var app1 = angular.module('appMy', ['ngRoute']);
app1.config(function($routeProvider){
	$routeProvider.when("/login", {
		templateUrl: "routes/login.html"
    }).when("/login - Copy",{
        templateUrl: "routes/login - Copy.html"
    })
  console.log("nvkjfbnkfjxdb");
});

app1.controller('myCtrl', function($scope, $http) {
  $scope.login = function() {
    
    var url = 'http://localhost:8080/signin?userId='+$scope.userId+'&password='+$scope.password;
    $http.get(url).then(function(response){
        console.log('response login ', response)
        if(response.data == true){
           
            alert("Login successfull")
            window.location.href="/todo.html"
        } else{
            alert("Unsuccessfull login")
        }
    })
};
$scope.signUp = function() {
    // store to db
    alert($scope.userId)
}

function getData() {
    $http.get('https://reqres.in/api/users?page=2').then(function(res){
        console.log('response ', res)
        $scope.data = res.data;
    })
}
getData()
})

