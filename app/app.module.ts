/// <reference path='../references.ts' />

module appTesting {
    'use strict';
    
    var testing = angular.module('testing', [])
        .controller('todoCtrl', TestingCtrl);
}