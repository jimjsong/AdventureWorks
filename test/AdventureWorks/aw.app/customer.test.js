describe("Customers", function () {

    var customerModel;

    beforeEach(function() {
        module('adventureWorks');

        inject(function(Customer) {
            customerModel = Customer;
        });
    });

    describe('constructor', function() {
        it('should return a user object', function () {
            var date = new Date();
            var customer = new customerModel(1, "style", "Mr.", "Test", "Middle", "User", "", "Contoso", "noone@nowhere.com", "555-555-5555", date);

            expect(customer.id).toBe(1);
            expect(customer.nameStyle).toBe("style");
            expect(customer.title).toBe("Mr.");
            expect(customer.firstName).toBe("Test");
            expect(customer.middleName).toBe("Middle");
            expect(customer.lastName).toBe("User");
            expect(customer.suffix).toBe("");
            expect(customer.companyName).toBe("Contoso");
            expect(customer.emailAddress).toBe("noone@nowhere.com");
            expect(customer.phone).toBe("555-555-5555");
            expect(customer.modifiedDate).toBe(date);
        });
    });

    describe('validation', function () {
        it('should return true for valid customer', function() {
            var customer = new customerModel(1, "style", "Mr.", "Test", "Middle", "User", "", "Contoso", "noone@nowhere.com", "555-555-5555", date);

            expect(customer.validate()).toBe(true);
        });

        it('should return false for customer with long first name', function() {
            var customer = new customerModel(1, "style", "Mr.", "vWGqq4mYbHeop5doIuq1rpoJUugjz21bBIwpfboHqJb6Y8o1wdvR1JCy1UFDMQ7XGIWo7MQNQo9CyWsMPSEwpauEOkPcq0JFdu24", "Middle", "User", "", "Contoso", "noone@nowhere.com", "555-555-5555", date);

            expect(customer.validate()).toBe(false);
        });

        it('should return false for customer with long last name', function () {
            var customer = new customerModel(1, "style", "Mr.", "Test", "Middle", "vWGqq4mYbHeop5doIuq1rpoJUugjz21bBIwpfboHqJb6Y8o1wdvR1JCy1UFDMQ7XGIWo7MQNQo9CyWsMPSEwpauEOkPcq0JFdu24", "", "Contoso", "noone@nowhere.com", "555-555-5555", date);

            expect(customer.validate()).toBe(false);
        });
    });

    describe('build', function() {
        it('should return a new customer', function() {

            var date = new Date();

            var data = {
                id: 1,
                nameStyle: "style",
                title: "Mr.",
                firstName: "Test",
                middleName: "Middle",
                lastName: "User",
                suffix: "",
                companyName: "Contoso",
                emailAddress: "noone@nowhere.com",
                phone: "555-555-5555",
                modifiedDate: date
            };

            var customer = customerModel.build(data);

            expect(customer.id).toBe(1);
            expect(customer.nameStyle).toBe("style");
            expect(customer.title).toBe("Mr.");
            expect(customer.firstName).toBe("Test");
            expect(customer.middleName).toBe("Middle");
            expect(customer.lastName).toBe("User");
            expect(customer.suffix).toBe("");
            expect(customer.companyName).toBe("Contoso");
            expect(customer.emailAddress).toBe("noone@nowhere.com");
            expect(customer.phone).toBe("555-555-5555");
            expect(customer.modifiedDate).toBe(date);
        });
    });

    describe('fromDto', function() {
        it('should return a single object if one DTO has been retrieved from service', function() {
            var date = new Date();
            var loginDate = new Date();

            var data = {
                id: 1,
                nameStyle: "style",
                title: "Mr.",
                firstName: "Test",
                middleName: "Middle",
                lastName: "User",
                suffix: "",
                companyName: "Contoso",
                emailAddress: "noone@nowhere.com",
                phone: "555-555-5555",
                modifiedDate: date
            };

            var customer = customerModel.fromDto(data);

            expect(customer).toEqual(jasmine.any(customerModel));

            expect(customer.id).toBe(1);
            expect(customer.nameStyle).toBe("style");
            expect(customer.title).toBe("Mr.");
            expect(customer.firstName).toBe("Test");
            expect(customer.middleName).toBe("Middle");
            expect(customer.lastName).toBe("User");
            expect(customer.suffix).toBe("");
            expect(customer.companyName).toBe("Contoso");
            expect(customer.emailAddress).toBe("noone@nowhere.com");
            expect(customer.phone).toBe("555-555-5555");
            expect(customer.modifiedDate).toBe(date);
            
        });

        it('should return an array if multiple DTOs have been retrieved from service', function() {
            var date = new Date();
            var loginDate = new Date();

            var data = [
                {
                    id: 1,
                    nameStyle: "style",
                    title: "Mr.",
                    firstName: "Test",
                    middleName: "Middle",
                    lastName: "User",
                    suffix: "",
                    companyName: "Contoso",
                    emailAddress: "noone@nowhere.com",
                    phone: "555-555-5555",
                    modifiedDate: date
                },
                {
                    id: 2,
                    nameStyle: "style",
                    title: "Mr.",
                    firstName: "Test",
                    middleName: "Middle",
                    lastName: "Second",
                    suffix: "",
                    companyName: "Contoso",
                    emailAddress: "noone@nowhere.com",
                    phone: "555-555-5555",
                    modifiedDate: date
                }
            ];

            var customers = customerModel.fromDto(data);

            expect(customers).toEqual(jasmine.any(Array));
            expect(customers.length).toEqual(2);

            expect(customers[0].id).toBe(1);
            expect(customers[0].firstName).toBe("Test");
            expect(customers[1].id).toBe(2);
            expect(customers[1].firstName).toBe("Second");

        });
    });

    describe('extensions', function () {
        it('should return false when checked for extensibility', function() {
            var customer = new customerModel(1, "style", "Mr.", "Test", "Middle", "User", "", "Contoso", "noone@nowhere.com", "555-555-5555", date);

            expect(Object.isExtensible(customer)).toBe(false);
        });

        it('should return undefined when adding extensions', function () {
            var customer = new customerModel(1, "style", "Mr.", "Test", "Middle", "User", "", "Contoso", "noone@nowhere.com", "555-555-5555", date);

            customer.dog = "Little Rascal";

            expect(customer.dog).toBe(undefined);
        });
    });
});