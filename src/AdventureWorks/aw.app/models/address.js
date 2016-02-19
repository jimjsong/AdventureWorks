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
