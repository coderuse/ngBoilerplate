(function(w){
    'use strict';

    var a = w.angular;

    a.module('ngBoilerplateApp')
        .controller('requestsCtrl', ['$scope', function ($scope) {
            $scope.msg = 'Monitoring';
        }]);
}(window));