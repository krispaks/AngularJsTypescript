/// <reference path='./typings/browser.d.ts' />
'use strict';

import 'angular';
import 'angular-route';
import 'angular-resource';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import { AppModuleCtrl } from './app.controller';
import { AppConfig } from './app.config';
import { HeroDetailComponent } from './components/herodetail/herodetail.component';
import { HeroListComponent } from './components/herolist/herolist.component'; 
import { HeroListService } from './components/herolist/herolist.service';

angular.module('AppModule', ['ngMaterial', 'ngRoute', 'ngResource'])
        .controller('AppModuleCtrl', AppModuleCtrl)
        .factory('heroListService', ['$resource', ($resource) => new HeroListService($resource)])
        .service('heroInterceptor', ['$q', function($q){
            var heroInterceptor = {
                response: function(config){
                    return config;              
                }
            };            
            return heroInterceptor;
        }])
        .component('heroList', new HeroListComponent())
        .component('heroDetail', new HeroDetailComponent())
        .config(AppConfig);      