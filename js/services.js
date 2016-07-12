'use strict';
angular.module('angularLearning.services',[])
        .service('employeeService', function($http){
        this.listEmployee = function() {
             return $http.get('http://localhost:3000/api/v1/employee_data.json')
//                .then(function(response){
//                      return response.data
//                      });
            
        }
});