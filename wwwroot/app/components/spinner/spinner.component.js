define(["require", "exports"], function (require, exports) {
    "use strict";
    var SpinnerCtrl = (function () {
        function SpinnerCtrl($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.options = {
                parentEl: '',
                show: false
            };
        }
        SpinnerCtrl.prototype.showDialog = function () {
            if (this.options.show) {
                this.$mdDialog.show({
                    template: "<md-dialog id=\"spinner\" style=\"background-color: transparent; box-shadow: noe\">\n                <div layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" aria-label=\"wait\" style=\"height: 100px;\">\n                    <md-progress-circular md-mode=\"inderterminate\" md-diameter=\"70\"></md-progress-circular>\n                </div>\n                 <button ng-click=\"$ctrl.closeDialog()\">X</button>\n                <md-button ng-click=\"$ctrl.closeDialog()\" class=\"md-primary\">Close</md-button>\n                </md-dialog>"
                });
            }
        };
        SpinnerCtrl.prototype.closeDialog = function () {
            this.$mdDialog.hide();
        };
        SpinnerCtrl.prototype.$onChanges = function (changeObject) {
            this.showDialog();
        };
        SpinnerCtrl.$inject = ['$mdDialog'];
        return SpinnerCtrl;
    }());
    var SpinnerComponent = (function () {
        function SpinnerComponent() {
            this.template = "<div>\n        <div>";
            this.controller = SpinnerCtrl;
            this.transclude = true;
            this.bindings = {
                options: '<'
            };
        }
        return SpinnerComponent;
    }());
    exports.SpinnerComponent = SpinnerComponent;
});
