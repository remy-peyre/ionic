angular.module('testApp', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            }).state('login', {
                url: '/map',
                templateUrl: 'templates/map.html'
            })
            .state('articles', {
                url: '/vote',
                templateUrl: 'templates/vote.html'
            })/*
            .state('geo', {
                url: '/geo',
                templateUrl: 'templates/geo.html',
                controller: 'GeoController'

            })*/;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');

    });
