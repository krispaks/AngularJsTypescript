'use strict';

import 'angular';

import { TestingCtrl  } from './testing/controller/testingCtrl';
import { HeroDetailComponent } from './components/herodetail/herodetail.component'; 

export var app = angular.module('testing', [])
        .controller('todoCtrl', TestingCtrl)
        .component('heroDetail', new HeroDetailComponent());      