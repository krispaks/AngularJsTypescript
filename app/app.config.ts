class HeroListRoute implements ng.route.IRoute {
    template: string;
    constructor(){
        let route = this;
        route.template = '<hero-list></hero-list>';
    }
}

class HeroDetailRoute implements ng.route.IRoute {
    template: string;
    resolve: any;
    
    constructor(){
        let route = this;
        this.template = '<hero-detail hero="$resolve.hero"></hero-detail>';
        this.resolve = {
                        hero: function () {
                            return {
                                name: 'Captain Barbel',
                                ability: 'Like Superman',
                                strength: 1000    
                            };
                        }
        }
    }
}

export class AppConfig{
    'use strict';
    
    static $inject = ['$routeProvider', '$locationProvider'];
    
    constructor($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider){
        $routeProvider
        .when('/HeroList', new HeroListRoute())
        .when('/HeroDetail', new HeroDetailRoute());
        
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
}