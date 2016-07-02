var angularJsApplication = angular
                                .module('angularLearning',[])
                                .controller('part6Controller', function($scope){
                                    var employees = [
                                        {firstName: 'Employee First Name1', lastName: 'Employee Last Name1', gender: 'Male'},
                                        {firstName: 'Employee2 First Name', lastName: 'Employee2 Last Name', gender: 'Female'},
                                        {firstName: 'Employee3 First Name', lastName: 'Employee3 Last Name', gender: 'Male'},
                                        {firstName: 'Employee4 First Name', lastName: 'Employee4 Last Name', gender: 'Male'},
                                        {firstName: 'Employee5 First Name', lastName: 'Employee5 Last Name', gender: 'Female'}
                                    ];
                                    $scope.employees = employees;
                                    
                                    var countries = [
                                        {
                                            name: 'country 1',
                                            cities:[
                                                {name: 'city 1'},
                                                {name: 'city 2'},
                                                {name: 'city 3'},
                                                {name: 'city 4'}
                                            ]
                                        },
                                        {
                                            name: 'country 2',
                                                cities: [
                                                    {name: 'city 1'},
                                                    {name: 'city 2'},
                                                    {name: 'city 3'},
                                                    {name: 'city 4'}
                                                ]
                                        },
                                        {
                                            name: 'country 3',
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