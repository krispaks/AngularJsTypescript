define(["require", "exports"], function (require, exports) {
    "use strict";
    var Hobby = (function () {
        function Hobby(name, detail) {
            this.name = name;
            this.detail = detail;
        }
        return Hobby;
    }());
    exports.Hobby = Hobby;
});
