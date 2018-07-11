/**
 * Created by diegosipin on 10/07/2018.
 */

angular.module('main.controllers', [])

    .controller('mainController' , ['$scope',
        function($scope) {
            $scope.accountTypes = {
                "1": {"desc":"Savings/Current", "status":"Okay", "accounts":["a","b","c"]},
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
        }
    ])
    ;