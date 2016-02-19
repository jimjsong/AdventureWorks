(function (app) {
    'use strict';

    app.controller('mainController', mainController);

    mainController.$inject = ['$scope', '$q', 'httpService'];

    function mainController($scope, $q, httpService) {
        /* jshint validthis:true */
        var vm = this;
        $scope.customerCollection = [];
        vm.sample = 5;
        var init = function () {
            httpService.getCustomers().then(function(customers) {
                angular.forEach(customers, function(customer) {
                    $scope.customerCollection.push({
                        id: customer.id,
                        firstName: customer.firstName,
                        lastName: customer.lastName,
                        emailAddress: customer.emailAddress,
                        companyName: customer.companyName
                    });
                });
            }).catch(function(error) {
                alert(error);
            });
        };

        init();
    }
})(angular.module('adventureWorks'));
