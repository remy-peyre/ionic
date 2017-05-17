(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('ModalController', ModalController);


    function ModalController($rootScope, $ionicModal) {

        $rootScope.openModal = openModal;
        $rootScope.closeModal = closeModal;

        //////////////////

        $ionicModal.fromTemplateUrl('my-pop.html', {
            scope: $rootScope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $rootScope.modal = modal;
        });

        function openModal() {
            $rootScope.modal.show();
        }

        function closeModal() {
            $rootScope.modal.hide();
        }
    }

}());
