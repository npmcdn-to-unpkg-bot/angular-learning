'use strict';
angular.module('angularLearning.filters',[])
    .filter('gender', function(){
        return function(gender){
            
            switch(gender){
                case 1:
                    return "Male";
                case 2:
                    return "Felmale";
                case 3:
                    return "Not Disclosed"
            }

        }
    });