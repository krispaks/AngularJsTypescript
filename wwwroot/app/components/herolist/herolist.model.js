define(["require", "exports"], function (require, exports) {
    "use strict";
    var Hero = (function () {
        function Hero(name, ability, strength) {
            this.name = name;
            this.ability = ability;
            this.strength = strength;
        }
        return Hero;
    }());
    exports.Hero = Hero;
});
