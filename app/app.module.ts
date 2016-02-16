/// <reference path='../references.ts' />
'use strict';

import 'angular';

import { TestingCtrl } from './testing/controller/testingCtrl';
import { HeroDetailComponent } from './components/herodetail/herodetail.component';
import { HeroListComponent } from './components/herolist/herolist.component'; 
import { HeroListService } from './components/herolist/herolist.service';

angular.module('testing', [])
        .controller('todoCtrl', TestingCtrl)
        .factory('heroListService', ['$http', ($http) => new HeroListService($http)])
        .component('heroList', new HeroListComponent())
        .component('heroDetail', new HeroDetailComponent());      