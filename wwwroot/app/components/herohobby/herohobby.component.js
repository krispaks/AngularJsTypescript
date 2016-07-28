define(["require", "exports", './herohobby.model'], function (require, exports, herohobby_model_1) {
    "use strict";
    var HeroHobbyCtrl = (function () {
        function HeroHobbyCtrl() {
            this.options = {
                parentEl: '',
                show: false
            };
            this.hobbyList = [];
            this.initialize();
        }
        HeroHobbyCtrl.prototype.initialize = function () {
            this.hobbyList.push(new herohobby_model_1.Hobby('basketball', 'dunks and hoops'));
            this.hobbyList.push(new herohobby_model_1.Hobby('hiking', 'discover nature'));
            this.hobbyList.push(new herohobby_model_1.Hobby('travelling', 'discover texas!!!'));
        };
        HeroHobbyCtrl.prototype.searchHobby = function (searchString) {
            console.log(this.hero.heroId);
        };
        HeroHobbyCtrl.prototype.showSpinner = function () {
            this.options = {
                show: true,
                parentEl: ''
            };
        };
        return HeroHobbyCtrl;
    }());
    var HeroHobbyComponent = (function () {
        function HeroHobbyComponent() {
            this.templateUrl = '';
            this.controller = {};
            this.bindings = {};
            var component = this;
            component.templateUrl = '../templates/herohobby/herohobby.template.html';
            component.controller = HeroHobbyCtrl;
            component.transclude = true;
            component.bindings = {
                hero: '<'
            };
        }
        return HeroHobbyComponent;
    }());
    exports.HeroHobbyComponent = HeroHobbyComponent;
});
