var angularJsApplication = angular
                            .module('angularLearning', [])
                            .controller('part11Controller', function($scope){
                                   var employees = [
                                    {name: 'abc', dateOfBirth: new Date("june 01 1090"), gender: 'Male', salary: 123456.989},
                                    {name: 'bca', dateOfBirth: new Date('January 01 1900'), gender: 'Female', salary:234567.005 },
                                    {name: 'cab', dateOfBirth: new Date('February 07 1910'), gender: 'Female', salary: 11223344.500},
                                    {name: 'good', dateOfBirth: new Date('March 07 1020'), gender: 'Male', salary:100100.001},
                                    {name: 'Boy', dateOfBirth: new Date('April 01 1930'), gender: 'Male', salary: 111111.111},
                                    {name: 'Mad', dateOfBirth: new Date('June 04 1940'), gender: 'Male', salary:222222.221}
                                    ];
                                $scope.employees = employees;
                            });