define(["require", "exports"], function (require, exports) {
    'use strict';
    var HeroListService = (function () {
        function HeroListService($resource) {
            this.$resource = $resource;
        }
        HeroListService.prototype.GetHeroes = function () {
            var req = this.$resource('https://api.github.com/users/krispaks/repos', {
                'query': {
                    method: 'GET',
                    isArray: true
                }
            });
            return req.query({}).$promise;
        };
        HeroListService.$inject = ['$resource'];
        return HeroListService;
    }());
    exports.HeroListService = HeroListService;
});
