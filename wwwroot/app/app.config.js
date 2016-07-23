define(["require", "exports"], function (require, exports) {
    "use strict";
    var HeroListRoute = (function () {
        function HeroListRoute() {
            var route = this;
            route.template = '<hero-list></hero-list>';
        }
        return HeroListRoute;
    }());
    var HeroDetailRoute = (function () {
        function HeroDetailRoute() {
            var route = this;
            this.template = '<hero-detail hero="$resolve.hero"></hero-detail>';
            this.resolve = {
                hero: function () {
                    return {
                        name: 'Captain Barbel',
                        ability: 'Like Superman',
                        strength: 1000
                    };
                }
            };
        }
        return HeroDetailRoute;
    }());
    var HeroHobbyRoute = (function () {
        function HeroHobbyRoute() {
            this.template = '<hero-hobby hero="$resolve.hero"></hero-hobby>';
            this.resolve = {
                hero: function () {
                    return {
                        heroId: 1
                    };
                }
            };
        }
        return HeroHobbyRoute;
    }());
    var AppConfig = (function () {
        function AppConfig($routeProvider, $locationProvider, $httProvider) {
            $routeProvider
                .when('/HeroList', new HeroListRoute())
                .when('/HeroDetail', new HeroDetailRoute())
                .when('/HeroHobby/:heroId', new HeroHobbyRoute());
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
        }
        AppConfig.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
        return AppConfig;
    }());
    exports.AppConfig = AppConfig;
});
