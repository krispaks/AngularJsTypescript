var app;
(function (app) {
    var herohobby;
    (function (herohobby) {
        var HeroHobbyCtrl = (function () {
            function HeroHobbyCtrl() {
            }
            return HeroHobbyCtrl;
        }());
        var HeroHobby = (function () {
            function HeroHobby() {
                this.templateUrl = '';
                this.controller = {};
                this.bindins = {};
                var component = this;
                component.templateUrl = '';
                component.controller = HeroHobbyCtrl;
                component.transclude = true;
            }
            return HeroHobby;
        }());
    })(herohobby = app.herohobby || (app.herohobby = {}));
})(app || (app = {}));
