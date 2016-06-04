"use strict";
var core_1 = require('@angular/core');
var UtilsComponent = (function () {
    function UtilsComponent() {
    }
    UtilsComponent.prototype.loadScript = function (src, callback) {
        var s, r, t;
        r = false;
        s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = src;
        s.onload = s.onreadystatechange = function () {
            //console.log( this.readyState ); //uncomment this line to see which ready states are called.
            if (!r && (!this.readyState || this.readyState == 'complete')) {
                r = true;
                callback();
            }
        };
        t = document.getElementsByTagName('script')[0];
        t.parentNode.insertBefore(s, t);
    };
    UtilsComponent = __decorate([
        core_1.Component({}), 
        __metadata('design:paramtypes', [])
    ], UtilsComponent);
    return UtilsComponent;
}());
exports.UtilsComponent = UtilsComponent;
//# sourceMappingURL=utils.component.js.map