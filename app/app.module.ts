/// <reference path='../references.ts' />
'use strict';

import 'angular';

import { AppModuleCtrl } from './testing/controller/AppModuleCtrl';
import { HeroDetailComponent } from './components/herodetail/herodetail.component';
import { HeroListComponent } from './components/herolist/herolist.component'; 
import { HeroListService } from './components/herolist/herolist.service';

angular.module('testing', [])
        .controller('todoCtrl', AppModuleCtrl)
        .factory('heroListService', ['$http', ($http) => new HeroListService($http)])
        .component('heroList', new HeroListComponent())
        .component('heroDetail', new HeroDetailComponent());      