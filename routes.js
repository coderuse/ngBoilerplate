(function(w){
    'use strict';

    var a = w.angular;

    a.module('ngBoilerplateApp')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise('/ngBoilerplate/monitoring');
            //
            // Now set up the states
            $stateProvider
                .state('ngBoilerplate', {
                    url: '/ngBoilerplate',
                    template: '<div ui-view></div>'
                })
                .state('ngBoilerplate.monitoring', {
                    url: '/monitoring',
                    templateUrl: './modules/monitoring/view.html',
                    controller: 'monitoringCtrl'
                })
                .state('ngBoilerplate.requests', {
                    url: '/requests',
                    templateUrl: './modules/requests/view.html',
                    controller: 'requestsCtrl'
                });
        }]);
}(window));