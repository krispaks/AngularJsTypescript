import 'angular';

import { TestingCtrl  } from './testing/controller/testingCtrl'; 

export var app = angular.module('testing', [])
        .controller('todoCtrl', TestingCtrl)