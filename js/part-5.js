var angularJsApplication = angular
                                .module('angularLearning',[])
                                .controller('part5Controller', function($scope){
                                    var employee = {
                                        firstName: 'FN1',
                                        lastName: 'LN1',
                                        gender: 'Male'
                                    };
                                    console.log(employee);
                                    $scope.employee = employee;
                                    
                                    $scope.message = "Hello world" ;
                                    
                                });