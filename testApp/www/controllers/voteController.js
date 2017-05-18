(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('VoteController', VoteController);


    // Triggered on a button click, or some other target
        function VoteController($scope, $ionicPopup) {
            $scope.showPopup = function() {
                $scope.data = {}

                // An elaborate, custom popup
                var myPopup = $ionicPopup.show({
                    template: '<input type="password" ng-model="data.wifi">',
                    title: 'Enter Wi-Fi Password',
                    subTitle: 'Please use normal things',
                    scope: $scope,
                    buttons: [
                        { text: 'Cancel' },
                        {
                            text: '<b>Save</b>',
                            type: 'button-positive',
                            onTap: function(e) {
                                if (!$scope.data.wifi) {
                                    //don't allow the user to close unless he enters wifi password
                                    e.preventDefault();
                                } else {
                                    return $scope.data.wifi;
                                }
                            }
                        },
                    ]
                });
                myPopup.then(function(res) {
                    console.log('Tapped!', res);
                });
                $timeout(function() {
                    myPopup.close(); //close the popup after 3 seconds for some reason
                }, 3000);
            };

            // A confirm dialog
            $scope.voteConfirm = function() {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Confirmer son choix',
                    template: 'Etes-vous sûre de sélectionner cette Battle'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                        console.log('You are sure');
                    } else {
                        console.log('You are not sure');
                   }
                });
            };

    };
}());

