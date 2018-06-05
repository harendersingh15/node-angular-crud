angular.module('app', []);



angular.module('app').controller('AppController', AppController);

AppController.$inject = ['$scope', '$http'];

function AppController($scope, $http) {

    $scope.message = 'Hello First Angular Page!!!'

    $scope.onSubmitClick = function() {
        $http({
            method: "POST",
            url: "/api/person/createPerson",
            data: {
                "firstName": $scope.fName,
                "lastName": $scope.lName,
                "mobile": $scope.contact,
                "age": $scope.age
            }

        }).then(function mySuccess(response) {
            $scope.getData();
            $scope.myWelcome = response.data;
            $scope.fName = "";
            $scope.lName = "";
            $scope.contact = "";
            $scope.age = "";
        }, function myError(response) {
            $scope.myWelcome = response.statusText;

        });
    }

    $scope.getData = function() {
        $http({
            method: "GET",
            url: "/api/person/getAllPerson"
        }).then(function mySuccess(response) {
            $scope.myData = response.data;
        }, function myError(response) {
            $scope.myData = response.statusText;
        });
    }

    $scope.getData();

    $scope.onDeleteClick = function(dat) {
        console.log("siv", dat);
        $http({
            method: "DELETE",
            url: "/api/person/delete/" + dat
                // data: {
                //     "id": dat
                // }

        }).then((response) => {
            //console.log(response);
            $scope.getData();
        }, (err) => {
            $scope.myErr = response.statusText;
        });

    }


    $scope.onUpdateClick = function(data, data1, data2) {
        console.log("siv", data);
        $http({
            method: "PUT",
            url: "/api/person/update/",
            data: {
                "id": data,
                "lastName": data1,
                "mobile": data2
            }

        }).then((response) => {
            //console.log(response);
            $scope.getData();
        }, (err) => {
            $scope.myErr = response.statusText;
        });

    }
}