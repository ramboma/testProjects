define(['angular'], function ( angular) {
    console.log('Loaded: hello angulartest.js');

    console.log('ready...');
    var myApp = angular.module('myModule', []);

    myApp.controller('myController', function ($scope) {
        $scope.init = function (model) {
            $scope.model = model;
        }
    });
   

});
