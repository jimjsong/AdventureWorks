describe("unit test", function () {
/*    describe("app.controller", function () {
        describe("mainController", function () {*/
            //setup variables
            var controller, createController, scope;
            var serviceVariables;
            var serviceNameUnderTest;
            var factoryName;

            var sandbox;
            var toastrErrorSpy;
            var mockServiceCall;
            var spyServiceCall;

            beforeEach(function () {
                module("adventureWorks");

                module(function ($provide, _httpService_) {
                    $provide.value('serviceVariables', serviceVariables);
                    $provide.value('httpService', httpService);
                });

                inject(function ( $q) {
                    mockServiceCall.getCustomers = function (value) {
                        var defer = $q.defer();
                        defer.resolve(unit.associates);
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
                    expect(removeSpy.calledWith("associates")).toBe(true);
                    //expect(spyServiceCall.callCount).toBe(1);
                    expect(true).toBe(true);
                });
            });
/*        });
    });*/
});