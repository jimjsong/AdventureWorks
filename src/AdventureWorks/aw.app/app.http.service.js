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
