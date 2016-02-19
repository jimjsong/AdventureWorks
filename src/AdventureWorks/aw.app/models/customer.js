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
