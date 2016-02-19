describe("unit test", function () {
    describe("app.controller", function () {
        describe("mainController", function () {
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

                module(function ($provide) {
                    $provide.value('serviceVariables', serviceVariables);
                });

                inject(function (_factoryName_) {
                    factoryName = _factoryName_;
                });

                inject(function ($q) {
                    mockServiceCall.getSomeServerValues = function (subDept) {
                        var defer = $q.defer();
                        defer.resolve(unit.associates);
                        return defer.promise;
                    };
                });

                spyServiceCall = sinon.spy(mockServiceCall, "getSomeServerValues");

                sandbox = sinon.sandbox.create();
                this.clock = sinon.useFakeTimers(moment("2016-01-12T00:00:00").valueOf());
                toastrErrorSpy = sandbox.spy(toastr, "error");
            });

            beforeEach(inject(function (_$controller_, _$state_, _$rootScope_, _$timeout_, _nxWindow_, _nxEvents_, _httpAssociates_) {
                scope = _$rootScope_.$new();
                nxEvents = _nxEvents_;

                createController = function () {
                    return _$controller_('amAssociateController', {
                        //'$state': _$state_,
                        '$scope': scope,
                        //'$timeout': _$timeout_,
                        //'nxWin': _nxWindow_,
                        //'nxEvents': _nxEvents_,
                        //'httpAssociates': _httpAssociates_
                    });
                };
            }));

            afterEach(function () {
                sandbox.restore();
            });

            describe("sub grouping name", function () {
                it("should do something", function () {
                    controller = createController();
                    scope.$digest();  //resolve promises
                    expect(removeSpy.calledWith("associates")).toBe(true);
                    expect(spyServiceCall.callCount).toBe(1);
                    expect(true).toBe(true);
                });
            });
        });
    });
});