'use strict';
angular.module('angularLearning.controllers',[
    'angularLearning.services'
])
    .controller('part13Controller', function($scope/*, $http*/, employeeService){
    getEmployees()
    function getEmployees(){
        employeeService.listEmployee()
            .then(function(response){
            $scope.employees = response.data
        });
    }
//    This works!    
//    $http.get('http://localhost:3000/api/v1/employee_data.json')
//            .then(function(response){            
//            $scope.employees = response.data
//        });
//            $scope.employees = employeeService.listEmployee();
            
    
    
        var countries  = [
            {
                name: 'India',
                cities: [
                    {name: 'Chennai'},
                    {name: 'Bangalore'},
                    {name: 'Mysore'},
                    {name: 'Mumbai'}
                ]
            },
            {
                name: 'USA',
                cities: [
                    {name: 'city 1'},
                    {name: 'city 2'},
                    {name: 'city 3'},
                    {name: 'city 4'}
                ]
            }
        ];
        $scope.countries = countries;
    });