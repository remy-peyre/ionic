(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('HomeController', HomeController);


    function HomeController($scope) {
        $scope.test = 'Welcome Home';

        $scope.classMates = [
            { name: 'Hakan' },
            { name: 'Oriane' },
            { name: 'Cyril' },
            { name: 'Arnaud' },
            { name: 'Clément' },
            { name: 'Lucie' }
        ];
    }

}());