var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        
        //No additional instantiation
        //Do not touch objects below
        //instantiation
        $scope.answer = 0;
        $scope.holder = 0;
        $scope.operation = "";
        $scope.itemList = [];
        $scope.cart = [];
        $scope.name = "";
        $scope.price = "";

        //Calculator skeleton
        
        //prepares prior input for calculation with succeeding input
        $scope.operate = function (input) {
            //code here
        };
        
        //actual calculation
        $scope.equals = function () {
            switch ($scope.operation) {
                case '+': {
                    //code here
                }
                case '-': {
                    //code here
                }
                case '*': {
                    //code here
                }
                case '/': {
                    //code here
                }
                default: {
                    $scope.reset();
                }
            }
        };
        
        //Cart skeleton
        
        //adds item x quantity to inventory
        $scope.addItem = function (name, priceEach) {
            //code here
        };

        //adds item and quantity to cart
        $scope.addToCart = function (name, priceeach, quantity) {
            //code here
        };
        
        //totals all in cart
        $scope.totalCart = 0;
        $scope.checkout = function () {
            //code here
        };

        //DO NOT TOUCH ANYTHING BEYOND THIS POINT
        //calculator functions

        //adds the input to the ones place value of the answer field and moves all prior numbers one place value up
        $scope.append = function (input) {
            $scope.answer = ($scope.answer * 10) + input;
        };

        //resets answer field to zero
        $scope.reset = function () {
            $scope.answer = 0;
        };

        //cart functions
        
        //resets all in cart
        $scope.resetCart = function () {
            $scope.cart = [];
        };
        
        //start app, hide button, show app panel
        //pacool lang
        $scope.started = false;
        $scope.start = function () {
            $scope.started = true;
        };
    });