/// <reference path='./typings/browser.d.ts' />
'use strict';

import 'angular';
import 'angular-route';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import { AppModuleCtrl } from './app.controller';
import { AppConfig } from './app.config';
import { HeroDetailComponent } from './components/herodetail/herodetail.component';
import { HeroListComponent } from './components/herolist/herolist.component'; 
import { HeroListService } from './components/herolist/herolist.service';

angular.module('AppModule', ['ngMaterial', 'ngRoute'])
        .controller('AppModuleCtrl', AppModuleCtrl)
        .factory('heroListService', ['$http', ($http) => new HeroListService($http)])
        .component('heroList', new HeroListComponent())
        .component('heroDetail', new HeroDetailComponent())
        .config(AppConfig);      