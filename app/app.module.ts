/// <reference path='../typings/browser.d.ts' />
'use strict';

import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import { AppModuleCtrl } from './testing/controller/AppModuleCtrl';
import { HeroDetailComponent } from './components/herodetail/herodetail.component';
import { HeroListComponent } from './components/herolist/herolist.component'; 
import { HeroListService } from './components/herolist/herolist.service';

angular.module('testing', ['ngMaterial'])
        .controller('todoCtrl', AppModuleCtrl)
        .factory('heroListService', ['$http', ($http) => new HeroListService($http)])
        .component('heroList', new HeroListComponent())
        .component('heroDetail', new HeroDetailComponent());      