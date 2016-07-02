var angularJsApplication = angular
                                .module('angularLearning',[])
                                .controller('part4Controller', function($scope){
                                   var baby = {
                                       firstName: 'baby 1',
                                       lastName: 'Baby last name',
                                       age: '2',
                                       image: '/img/baby-1.jpg'
                                       
                                   };
                                    $scope.baby = baby;
                                });