/// <reference path='../../../references.ts' />

module appTesting {
    'use strict';
        
    export class TestingCtrl {
        
        public static $inject = ['$scope'];
        
        constructor(private $scope: ITestingScope){
            $scope.name = 'khris';
        }
    }
}