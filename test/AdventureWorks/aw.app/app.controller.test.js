describe("unit test", function () {

    var controller, createController, scope;
    var serviceVariables;


    var sandbox;
    var toastrErrorSpy;
    var mockServiceCall = {};
    var spyServiceCall;

    beforeEach(function () {
        module("adventureWorks");

        module(function ($provide) {
            $provide.value('serviceVariables', serviceVariables);
            $provide.value('httpService', mockServiceCall);
        });

        inject(function ( $q) {
            mockServiceCall.getCustomers = function (value) {
                var defer = $q.defer();
                defer.resolve({hello:'test'});
                return defer.promise;
            };
        });

        sandbox = sinon.sandbox.create();
        spyServiceCall = sinon.spy(mockServiceCall, "getCustomers");
        this.clock = sinon.useFakeTimers(moment("2016-01-12T00:00:00").valueOf());
        toastrErrorSpy = sandbox.spy(toastr, "error");
    });

    beforeEach(function() {
        inject(function (_$controller_, _$rootScope_, _$timeout_) {
            scope = _$rootScope_.$new();

            createController = function () {
                return _$controller_('mainController', {
                    '$scope': scope,
                    'httpService': mockServiceCall
                });
            };
        });
    });

    afterEach(function () {
        sandbox.restore();
    });

    describe("sub grouping name", function () {
        it("should do something", function () {
            controller = createController();
            scope.$digest();  //resolve promises
            expect(controller.sample).toBe(5);
            expect(spyServiceCall.callCount).toBe(1);
            expect(true).toBe(true);
        });
    });

});