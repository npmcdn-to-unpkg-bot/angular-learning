var angularJsApplication = angular
                                .module('angularLearning',[])
                                .controller('part7Controller', function($scope){
                                   var technologies = [
                                       {name: 'Java', likes: 0, dislikes: 0},
                                       {name: 'C#', likes: 0, dislikes: 0},
                                       {name: 'Jquery', likes: 0, dislikes: 0},
                                       {name: 'AngularJS',likes: 0, dislikes: 0}
                                   ];
                                    $scope.technologies = technologies;
                                    $scope.incrementLikes = function(technology){
                                        technology.likes++;
                                    }
                                    $scope.incrementDislikes = function(technology){
                                        technology.dislikes++;
                                    }
                                });