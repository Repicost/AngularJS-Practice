/**
 * Created by diegosipin on 10/07/2018.
 */
angular.module('main.controllers', ['ui.bootstrap'])

    .controller('mainController' , ['$scope', '$uibModal',
        function($scope, $uibModal) {
            $scope.editIndex = -1;
            $scope.editKey = -1;

            $scope.initialiseValues = {
                accountDesc : '',
                accountNumber : '',
                amount : '',
                limit : '',
                extension : ''
            };

            var keyValue = {
                key : ''
            };

            $scope.accountTypes = {
                "1": {"desc":"Savings/Current", "status":"Okay", "accounts":[
                    {"accountDesc": "An Account", "accountNumber": "120115", "amount" : 200, "limit" : 5000, "extension": "A name"},
                    {"accountDesc": "Another Account", "accountNumber": "2014111606", "amount": 420}
                    ]},
                "2": {"desc":"Credit card", "status":"", "accounts":[]},
                "3": {"desc":"Other", "status":"", "accounts":[]},
                "4": {"desc":"Investment","status":"", "accounts":[]},
                "5": {"desc":"Expense", "status":"", "accounts":[]},
                "6": {"desc":"Loan", "status":"", "accounts":[]},
                "7": {"desc":"Property", "status":"", "accounts":[]},
                "8": {"desc":"Other Assets", "status":"", "accounts":[]},
                "9": {"desc":"Other Liabilities", "status":"", "accounts":[]},
                "10": {"desc":"Retirement", "status":"", "accounts":[]},
                "11": {"desc":"Insurance", "status":"", "accounts":[]},
                "12": {"desc":"Rewards", "status":"", "accounts":[]},
                "13": {"desc":"Bill", "status":"", "accounts":[]},
                "999": {"desc":"Dummy", "status":"", "accounts":[]}
            };





            //experimental code start
            $scope.editSometing = {
                accountDesc : '',
                accountNumber : '',
                amount : '',
                limit : '',
                extension : ''
            };

            $scope.finishedit = function () {
                $scope.accountTypes[$scope.editKey].accounts[$scope.editIndex] = $scope.editSometing;
                $scope.editIndex = -1;
                $scope.editKey = -1;

            };
            //experimental code end

            //TEMPORARY CODE FOR EDIT JUST TO MAKE IT WORK
            $scope.passValuesToForm = function (key, index) {
                $scope.editSometing = $scope.accountTypes[key].accounts[index];
                $scope.editIndex = index;
                $scope.editKey = key;
            };

            //TEMPORARY CODE FOR EDIT JUST TO MAKE IT WORK END


            $scope.setKeyValue = function (key) {
                keyValue.key = key;
            };

            $scope.getKeyValue = function () {
              return keyValue.key;
            };

            $scope.addToArray = function (key) {
                console.log(key);
                $scope.accountTypes[key].accounts.push({
                    accountName:   $scope.initialiseValues.accountDesc,
                    accountNumber: $scope.initialiseValues.accountNumber,
                    amount:        $scope.initialiseValues.amount,
                    limitAmount:   $scope.initialiseValues.limit,
                    extensionName: $scope.initialiseValues.extension
                });
                console.log($scope.accountTypes);
            };
            
            $scope.deleteData = function (key, index) {
                delete $scope.accountTypes[key].accounts[index];
            };

            //Modal experiment
            $scope.ModalFunction = function () {
                var modalInstance = $uibModal.open({
                    templateUrl: 'resources/app/main/templates/addForm.html',
                    backdrop: 'static'
                });
            };

        }]);
