'use strict';

import 'angular';

import { TestingCtrl  } from './testing/controller/testingCtrl';
import { HeroDetailComponent } from './components/herodetail/herodetail.component';
import { HeroListComponent } from './components/herolist/herolist.component'; 

export var app = angular.module('testing', [])
        .controller('todoCtrl', TestingCtrl)
        .component('heroList', new HeroListComponent())
        .component('heroDetail', new HeroDetailComponent());      