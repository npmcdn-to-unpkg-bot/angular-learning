/*var angularJsApplication = angular.module("angularLearning",[]);

var part3Controller = function($scope){
    var employee = {
        firstName: 'First Name',
        lastName: 'Last Name',
        age: '12',
        gender: 'Male'
    };
    $scope.employee = employee;
}

 angularJsApplication.controller('part3Controller', part3Controller);*/

/*or */

var angularJsApplication = angular
                                    .module("angularLearning",[])
                                    .controller('part3Controller', function($scope){
                                        var employee = {
                                            firstName: 'First Name',
                                            lastName: 'Last Name',
                                            age: '12',
                                            gender: 'Male'
                                        };
                                        $scope.employee = employee;
                                    });

