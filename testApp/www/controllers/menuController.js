(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('MenuController', MenuController);


    function MenuController($rootScope, $state, $ionicSideMenuDelegate) {

        $rootScope.toggleLeftMenu = toggleLeftMenu;
        $rootScope.changeState = changeState;

        ///////////////////

        function toggleLeftMenu() {
            $ionicSideMenuDelegate.toggleLeft();
        }

        function changeState(state) {
            $state.go(state);
        }

    }

}());
