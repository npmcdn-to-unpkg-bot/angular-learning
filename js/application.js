var angularJsApplication = angular.module('angularLearning',[]);

var indexController  = function($scope){
    $scope.message = "AngularJs Demo";
    $scope.title = "AngularJs Demo";
}

//angularJsApplication.controller("indexController", indexController);

/* or"*/

angularJsApplication.controller('indexController', function($scope){
    $scope.message = "AngularJs Demo1";
    $scope.title = "AngularJs Demo2";
});


