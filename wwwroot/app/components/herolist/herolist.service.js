define(["require", "exports"], function (require, exports) {
    'use strict';
    var HeroListService = (function () {
        function HeroListService($resource) {
            this.$resource = $resource;
        }
        HeroListService.prototype.GetHeroes = function () {
            var req = this.$resource('/api/Hero');
            return req.get().$promise;
        };
        HeroListService.$inject = ['$resource'];
        return HeroListService;
    }());
    exports.HeroListService = HeroListService;
});
