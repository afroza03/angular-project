var app1 = angular.module('appMy', ['ngRoute']);
app1.config(function($routeProvider){
	$routeProvider.when("/login", {
		templateUrl: "routes/login.html"
    }).when("/login - Copy",{
        templateUrl: "routes/login - Copy.html"
    }).when("/vagitable",{
        templateUrl: "routes/vagitable.html"

        }).when("/fruit",{
            templateUrl: "routes/fruit.html"
        }).when("/choclate",{
            templateUrl:"routes/choclate.html"
        })
  console.log("nvkjfbnkfjxdb");
});
// var app2 = angular.module('appMy2', ['ngRoute']);
// app2.config(function($routeProvider){
// 	$routeProvider.when("/submenu",{
//          templateUrl: "routes/submenu.html"

//         })
 
// });

app1.controller('myCtrl', function($scope, $http) {
  $scope.login = function() {
    
    var url = 'http://localhost:8080/signin?userId='+$scope.userId+'&password='+$scope.password;
    $http.get(url).then(function(response){
        console.log('response login ', response)
        if(response.data == true){
           
            alert("Login successfull")
            window.location.href="/onlycart.html"
        } else{
            alert("Unsuccessfull login")
        }
    })
};
$scope.signUp = function() {
    // store to db
    alert("Successfully registred")
}

function getData() {
    $http.get('https://reqres.in/api/users?page=2').then(function(res){
        console.log('response ', res)
        $scope.data = res.data;
    })
}
getData();

$scope.check=function(){
alert("Thank you for shopping from us...stay safe and we will deliver your product");
}





});

