define(["require", "exports", './app.controller', './app.config', './components/herodetail/herodetail.component', './components/herolist/herolist.component', './components/herohobby/herohobby.component', './components/herolist/herolist.service', './components/spinner/spinner.component', 'angular', 'angular-route', 'angular-resource', 'angular-animate', 'angular-aria', 'angular-material'], function (require, exports, app_controller_1, app_config_1, herodetail_component_1, herolist_component_1, herohobby_component_1, herolist_service_1, spinner_component_1) {
    'use strict';
    var AppModule = (function () {
        function AppModule() {
            angular.module('AppModule', ['ngMaterial', 'ngRoute', 'ngResource'])
                .controller('AppModuleCtrl', app_controller_1.AppModuleCtrl)
                .factory('heroListService', ['$resource', function ($resource) { return new herolist_service_1.HeroListService($resource); }])
                .component('heroList', new herolist_component_1.HeroListComponent())
                .component('heroDetail', new herodetail_component_1.HeroDetailComponent())
                .component('heroHobby', new herohobby_component_1.HeroHobbyComponent())
                .component('spinner', new spinner_component_1.SpinnerComponent())
                .config(app_config_1.AppConfig);
        }
        return AppModule;
    }());
    exports.AppModule = AppModule;
});
