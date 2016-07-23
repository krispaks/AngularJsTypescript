define(["require", "exports"], function (require, exports) {
    "use strict";
    var Hero = (function () {
        function Hero(heroId, name, ability, strength) {
            this.heroId = heroId;
            this.name = name;
            this.ability = ability;
            this.strength = strength;
        }
        return Hero;
    }());
    exports.Hero = Hero;
});
