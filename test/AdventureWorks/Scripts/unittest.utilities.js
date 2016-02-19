(function(unit){
    unit.stringValidValue = null;
    unit.dateTimeValidValue = null;

    unit.mockNxWindow = {
        storage: function() {
            return {
                get: function (str) {
                    //feel free to add to this an needed for your tests
                    switch(str) {
                        case "appDeviceId":
                            return 0;
                        case "currentUser":
                            return {"userName":"test user"};
                        case "selectedSite":
                            return {"subDept":27};
                        case "searchDates":
                            return {startDate: "1/31/2016", endDate:"02/01/2016", useDataRange: false, workDate: "02/01/2016"};
                        default:
                            return true;
                    }
                },
                set: function(name, value) {
                    return true;
                },
                clear: function(str) {
                    return true;
                },
                remove: function(name) {
                    return true;
                }
            };
        }
    };
    unit.mockVoidReasons = [
        {
            "id": 1,
            "voidReason": "N/A",
            "active": true
        },
        {
            "id": 2,
            "voidReason": "associate time void reason",
            "active": true
        },
        {
            "id": 3,
            "voidReason": "both truck and associate time void reason",
            "active": true
        }
    ];

    unit.loadentry =
    {
        stringValidValue:null,
        dateTimeValidValue: null,
        dateValidValue: null,
        guidValidValue: null,
        numberValidValue: null,
        objectValidValue: null,
        mock$filterValidValue: null,
        newGuid: null,
        mock$filter: function(val) {
            return (function (input, places) {
                return unit.loadentry.mock$filterValidValue;
            });
        },
        palletsCreated: 0,
        mockValidationTools: {
            stringValid: function(str) {
                if (unit.loadentry.stringValidValue) {
                    return unit.loadentry.stringValidValue;
                }

                if (undefined === str || null === str || "" === str) {
                    return false;
                }
                return true;
            },
            dateTimeValid: function(str) {
                if (unit.loadentry.dateTimeValidValue) {
                    return unit.loadentry.dateTimeValidValue;
                }

                if (!unit.loadentry.mockValidationTools.stringValid(str)) return false;

                var tryDate = Date.parse(str);
                if (isNaN(tryDate)) return false;

                var valid = moment(str, "M/D/YYYY H:mm").isValid();

                return valid;
            },
            dateValid: function(str) {
                if (unit.loadentry.dateValidValue) {
                    return unit.loadentry.dateValidValue;
                }
                if (!unit.loadentry.mockValidationTools.stringValid(str)) return false;

                var tryDate = Date.parse(str);
                if (isNaN(tryDate)) return false;

                var valid = moment(str, "M/D/YYYY", true).isValid();

                return valid;
            },
            guidValid: function(guidText) {
                if (unit.loadentry.guidValidValue) return unit.loadentry.guidValidValue;

                var re = /^(\{{0,1}([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}\}{0,1})$/;
                return re.test(guidText);
            },
            numberValid: function(num) {
                if (unit.loadentry.numberValidValue) {
                    return unit.loadentry.numberValidValue;
                }

                if (undefined === num || null === num || isNaN(num)) {
                    return false;
                }
                return true;
            },
            objectValid: function(obj) {
                if (unit.loadentry.objectValidValue) {
                    return unit.loadentry.objectValidValue;
                }

                if (undefined === obj || null === obj || typeof obj !== "object") {
                    return false;
                }
                return true;
            },
            Error: function(viewName, subViewName, errorType, message, priority) {
                this.viewName = viewName;
                this.subViewName = subViewName;
                this.errorType = errorType;
                this.message = message;
                this.priority = priority;
                if (priority) {
                    this.priority = priority;
                } else {
                    this.priority = 9;
                }
            }
        },
        mockPricingEngine: {
                getCreatedPallets: function(val) {
                    return unit.loadentry.palletsCreated;
                }
        },
        newGuid: function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }
    unit.associates = [{"id":66970,"siteId":27,"subDept":27,"active":true,"inactiveDate":"","firstName":"COREY","lastName":"ABERNATHY","emailAddress":"","homePhone":" ","workPhone":null,"cellPhone":null,"address1":null,"address2":null,"city":"VALDESE","state":"NC","zipCode":null,"county":null,"dateOfBirth":"01/01/1900","gender":"M","emergencyContactName":"","emergencyRelationName":null,"emergencyDayPhone":" ","emergencyNightPhone":null,"workStatus":"F","workStatusType":" ","adpFileNumber":53303,"payGroup":"CHS","associateTypeName":"Warehouse Associate","isSiteTransaction":false,"displayName":"ABERNATHY COREY R-66970","middleName":"R","mobileReplicate":true},{"id":66417,"siteId":27,"subDept":27,"active":true,"inactiveDate":"","firstName":"BARBARA","lastName":"ABERNETHY","emailAddress":"","homePhone":"8283901592","workPhone":null,"cellPhone":null,"address1":null,"address2":null,"city":"CONNELLY SPRI","state":"NC","zipCode":null,"county":null,"dateOfBirth":"01/01/1900","gender":"F","emergencyContactName":"","emergencyRelationName":null,"emergencyDayPhone":" ","emergencyNightPhone":null,"workStatus":"F","workStatusType":" ","adpFileNumber":53052,"payGroup":"CHS","associateTypeName":"Sanitation Sanitn ","isSiteTransaction":false,"displayName":"ABERNETHY BARBARA A-66417","middleName":"A","mobileReplicate":true},{"id":25752,"siteId":27,"subDept":27,"active":true,"inactiveDate":"","firstName":"LOGAN","lastName":"ABERNETHY","emailAddress":"loganabernethy@hotmail.com","homePhone":"8286128870","workPhone":null,"cellPhone":null,"address1":"517 Hickory St","address2":"","city":"LENOIR","state":"NC","zipCode":"28638","county":"CALDWELL","dateOfBirth":"07/27/1988","gender":"M","emergencyContactName":"JACKIE ABERNETHY","emergencyRelationName":"MOTHER","emergencyDayPhone":"8286128880","emergencyNightPhone":"8286128880","workStatus":"F","workStatusType":null,"adpFileNumber":25752,"payGroup":"CHS","associateTypeName":"Warehouse Associate","isSiteTransaction":false,"displayName":"ABERNETHY LOGAN-25752","middleName":"","mobileReplicate":true},{"id":27591,"siteId":27,"subDept":27,"active":false,"inactiveDate":"","firstName":"JORDAN","lastName":"ADAMS","emailAddress":"mdi@lmsintellibound.com","homePhone":"8287268933","workPhone":null,"cellPhone":null,"address1":"2095 Dave Chester Rd","address2":"","city":"LENOIR","state":"NC","zipCode":"28645","county":"CALDWELL","dateOfBirth":"01/03/1992","gender":"M","emergencyContactName":"MAMIE CAMMON","emergencyRelationName":"OTHER RELATIVE","emergencyDayPhone":"8287286929","emergencyNightPhone":"8287286929","workStatus":"F","workStatusType":null,"adpFileNumber":27591,"payGroup":"CHS","associateTypeName":"Warehouse Associate","isSiteTransaction":false,"displayName":"ADAMS JORDAN C-27591","middleName":"C","mobileReplicate":true}];

}(window.unit = window.unit || {}));