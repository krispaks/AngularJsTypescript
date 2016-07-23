define(["require", "exports"], function (require, exports) {
    'use strict';
    var HeroListCtrl = (function () {
        function HeroListCtrl(heroListService) {
            this.heroListService = heroListService;
            this.heroList = [];
            this.repos = {};
            this.selectCurrent = function (currentHero) {
                var ctrl = this;
                ctrl.currentHero = currentHero;
            };
            var ctrl = this;
            ctrl.heroList.push({ heroId: 1, name: 'superman', ability: 'strength', strength: 1000 });
            ctrl.heroList.push({ heroId: 2, name: 'batman', ability: 'intelligence', strength: 10 });
            ctrl.heroList.push({ heroId: 3, name: 'flash', ability: 'speed', strength: 100 });
            heroListService.GetHeroes()
                .then(function (data) {
            })
                .catch(function (error) {
            });
        }
        HeroListCtrl.$inject = ['heroListService'];
        return HeroListCtrl;
    }());
    var HeroListComponent = (function () {
        function HeroListComponent() {
            var component = this;
            component.templateUrl = '../templates/herolist/herolist.template.html';
            component.controller = HeroListCtrl;
            component.transclude = true;
        }
        return HeroListComponent;
    }());
    exports.HeroListComponent = HeroListComponent;
});
