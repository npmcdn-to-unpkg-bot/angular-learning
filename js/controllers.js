'use strict';
angular.module('angularLearning.controllers',[])
    .controller('part13Controller', function($scope){
        var employees = [
            {name: 'asdf', gender: 1, age: 20, salary: 10000},
            {name: 'bbc', gender: 2, age: 20, salary: 6000},
            {name: 'cat', gender: 3, age: 22, salary: 8000},
            {name: 'bbb', gender: 1, age: 24, salary: 12000},
            {name: 'ccc', gender: 1, age: 24, salary: 15000}
        ];
        $scope.employees = employees;
});