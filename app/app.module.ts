import 'angular';

import { TestingCtrl  } from './testing/controller/testingCtrl'; 

export var app = angular.module('testing', []);

app.controller('todoCtrl', TestingCtrl)