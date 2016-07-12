var angularJsApplication = angular
                            .module('angularLearning',[])
                            .controller('part12Controller', function($scope){
                               var employees = [
                                   {name: 'Asdf', gender: 'Male', salary: 6000, country: 'India'},
                                   {name: 'Cheng', gender: 'Male', salary: 8000, country: 'China'},
                                   {name: 'Mike', gender: 'Male', salary: 5000, country: 'Australia'},
                                   {name: 'Roice', gender: 'Female', salary: 9000, country: 'United Kingdom'},
                                   {name: 'Maria', gender: 'Female', salary: 10000, country: 'Switzerland'},
                                   {name: 'Raina', gender: 'Male', salary: 15000, country: 'India'}
                               ];
                               $scope.employees = employees;
                            
                                $scope.search = function(item){
                                    if($scope.searchText == undefined){
                                        return true;
                                    }else{
                                        if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||                                     item.countrypa.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1){
                                            return true;
                                        }
                                    }
                                    return false;
                                }
                                
                            });