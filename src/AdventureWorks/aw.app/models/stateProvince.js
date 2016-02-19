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
