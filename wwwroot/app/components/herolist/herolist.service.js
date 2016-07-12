define(["require", "exports"], function (require, exports) {
    'use strict';
    var HeroListService = (function () {
        function HeroListService($resource) {
            this.$resource = $resource;
        }
        HeroListService.prototype.GetHeroes = function () {
            var ctrl = this;
            var req = ctrl.$resource('https://api.github.com/users/krispaks/repos', {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            });
            var res = req.query({}).$promise;
            return res;
        };
        HeroListService.$inject = ['$resource'];
        return HeroListService;
    }());
    exports.HeroListService = HeroListService;
});
