(function(app) {
    'use strict';

    app.directive('showInfo', showInfo);

    showInfo.$inject = ['$uibModal'];

    function showInfo($uibModal) {
        return {
            link: link,
            controller: controller,
            controllerAs: 'vm',
            restrict: 'A',
            templateUrl: 'templates/directives/templates/showInfo.tpl.html'
        };

        function link(scope, element, attrs) {
            element.bind('click', function () {
                scope.open();
            });
        }

        function controller($scope) {
            $scope.open = function () {
                var modal = $uibModal.open({
                    templateUrl: 'customer-info.html',
                    controller: 'customerInfoController',
                    controllerAs: 'vm',
                    size: 'large',
                    resolve: {
                        id: function () {
                            return $scope.customer.id;
                        }
                    }
                });
            }
        }
    }

    app.controller('customerInfoController', customerInfoController);

    customerInfoController.$inject = ['$scope', '$q', '$uibModalInstance', 'httpService', 'id'];

    function customerInfoController($scope, $q, $uibModalInstance, httpService, id) {
        var vm = this;
        vm.customer = {};
        vm.customerAddress = {};

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        var init = function () {
            var all = $q.all([
                httpService.getCustomer(id),
                httpService.getAddresses(id)
            ]);

            return all.then(function (dataset) {
                vm.customer = dataset[0];
                vm.customerAddress = dataset[1];
            }).catch(function (error) {
                alert(error);
            });
        }

        init();
    }

})(angular.module('adventureWorks'));