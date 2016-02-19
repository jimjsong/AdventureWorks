(function () {
    'use strict';

    angular.module('adventureWorks', [
        // Angular modules 
        'smart-table',

        // Custom modules 

        // 3rd Party Modules
        'ui.bootstrap'
    ]);
})();
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

(function (app) {
    'use strict';

    app.factory('httpService', httpService);

    httpService.$inject = ['$http', '$q', 'Address', 'Customer', 'StateProvince'];

    function httpService($http, $q, Address, Customer, StateProvince) {

        var baseUrl = 'http://adworks.azurewebsites.net/api/';
        var customerUrl = baseUrl + 'customers';
        var addressUrl = baseUrl + 'addresses';
        var addressTypesUrl = baseUrl + 'addressTypes';
        var statesUrl = baseUrl + 'states';

        var service = {
            getCustomers: getCustomers,
            getCustomer: getCustomer,
            getAddresses: getAddresses,
            getAddressTypes: getAddressTypes,
            getStates: getStates,
            getStatesForCountry: getStatesForCountry
        };

        function getCustomers() {
            return $http.get(customerUrl).then(function (response) {
                return Customer.fromDto(response.data);
            }, handleError);
        }

        function getCustomer(customerId) {
            return $http.get(customerUrl + "/" + customerId).then(function (response) {
                return Customer.fromDto(response.data);
            }, handleError);
        }

        function getAddresses(customerId) {
            return $http.get(addressUrl + "/" + customerId).then(function (response) {
                return Address.fromDto(response.data);
            }, handleError);
        }

        function getAddressTypes() {
            return $http.get(addressTypesUrl).then(function (response) {
                return response;
            }, handleError);
        }

        function getStates() {
            return $http.get(statesUrl).then(function (response) {
                return StateProvince.fromDto(response.data);
            }, handleError);
        }

        function getStatesForCountry(country) {
            return $http.get(statesUrl + "/" + country).then(function (response) {
                return StateProvince.fromDto(response.data);
            }, handleError);
        }

        function handleError(response) {
            if (!angular.isObject(response.data) || !response.data.message) {
                return $q.reject("An unknown error occurred.");
            }

            return $q.reject(response.data.message);
        }

        return service;
    }
})(angular.module('adventureWorks'));

(function (app) {
    'use strict';

    app.factory('Address', function () {

        function Address(id, addressLine1, addressLine2, city, stateProvince, countryRegion, postalCode, modifiedDate, addressType) {
            this.id = id;
            this.addressLine1 = addressLine1;
            this.addressLine2 = addressLine2;
            this.city = city;
            this.stateProvince = stateProvince;
            this.countryRegion = countryRegion;
            this.postalCode = postalCode;
            this.modifiedDate = modifiedDate;
            this.addressType = addressType;

            Object.preventExtensions(this);
        }

        Address.prototype.validate = function () {

            return true;
        };

        Address.build = function (data) {
            return new Address(
                data.Id,
                data.AddressLine1,
                data.AddressLine2,
                data.City,
                data.StateProvince,
                data.CountryRegion,
                data.PostalCode,
                data.CompanyName,
                data.ModifiedDate,
                data.AddressType
            );
        };

        Address.fromDto = function (responseData) {
            if (angular.isArray(responseData)) {
                return responseData.map(Address.build);
            }

            return Address.build(responseData);
        };

        return Address;
    });
})(angular.module('adventureWorks'));

(function (app) {
    'use strict';

    app.factory('Customer', function () {

        function Customer(id, nameStyle, title, firstName, middleName, lastName, suffix, companyName, emailAddress, phone, modifiedDate) {
            this.id = id;
            this.nameStyle = nameStyle;
            this.title = title;
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName = lastName;
            this.suffix = suffix;
            this.companyName = companyName;
            this.emailAddress = emailAddress;
            this.phone = phone;
            this.modifiedDate = modifiedDate;

            Object.preventExtensions(this);
        }

        Customer.prototype.validate = function () {

            if (this.firstName.length > 75) return false;
            if (this.lastName.length > 75) return false;

            return true;
        };

        Customer.build = function (data) {
            return new Customer(
                data.Id,
                data.NameStyle,
                data.Title,
                data.FirstName,
                data.MiddleName,
                data.LastName,
                data.Suffix,
                data.CompanyName,
                data.EmailAddress,
                data.Phone,
                data.ModifiedDate
            );
        };

        Customer.fromDto = function (responseData) {
            if (angular.isArray(responseData)) {
                return responseData.map(Customer.build);
            }

            return Customer.build(responseData);
        };

        return Customer;
    });
})(angular.module('adventureWorks'));

(function (app) {
    'use strict';

    app.factory('StateProvince', function () {

        function StateProvince(name, countryRegion) {
            this.name = name;
            this.countryRegion = countryRegion;

            Object.preventExtensions(this);
        }

        StateProvince.prototype.validate = function () {

            return true;
        };

        StateProvince.build = function (data) {
            return new StateProvince(
                data.Name,
                data.CountryRegion
            );
        };

        StateProvince.fromDto = function (responseData) {
            if (angular.isArray(responseData)) {
                return responseData.map(StateProvince.build);
            }

            return StateProvince.build(responseData);
        };

        return StateProvince;
    });
})(angular.module('adventureWorks'));

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