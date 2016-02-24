export class AppConfig{
    'use strict';
    
    static $inject = ['$routeProvider', '$locationProvider'];
    
    constructor($routeProvider: angular.route.IRouteProvider, $locationProvider: ng.ILocationProvider){
        $routeProvider
        .when('/HeroList', {
            template: '<hero-list></hero-list>'
        })
        .when('/HeroDetail', {
            template: '<hero-detail hero="$resolve.hero"></hero-detail>',
            resolve: {
                hero: function () {
                    return {
                        name: 'Captain Barbel',
                        ability: 'Like Superman',
                        strength: 1000    
                    };
                }
            }
        });
        
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
}