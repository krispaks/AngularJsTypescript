define(["require", "exports"], function (require, exports) {
    'use strict';
    var HeroDetailCtrl = (function () {
        function HeroDetailCtrl() {
        }
        HeroDetailCtrl.prototype.selectHero = function () {
            var ctrl = this;
            ctrl.makeCurrent({ hero: ctrl.hero });
        };
        return HeroDetailCtrl;
    }());
    var HeroDetailComponent = (function () {
        function HeroDetailComponent() {
            this.templateUrl = '';
            this.controller = {};
            this.bindings = {};
            var component = this;
            component.templateUrl = '../templates/herodetail/herodetail.template.html';
            component.controller = HeroDetailCtrl;
            component.transclude = true;
            component.bindings = {
                hero: '<',
                makeCurrent: '&'
            };
        }
        return HeroDetailComponent;
    }());
    exports.HeroDetailComponent = HeroDetailComponent;
});
