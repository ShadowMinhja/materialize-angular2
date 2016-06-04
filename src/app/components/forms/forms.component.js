"use strict";
var core_1 = require('@angular/core');
var utils_component_1 = require('../../shared/utils.component');
var FormsComponent = (function () {
    function FormsComponent() {
    }
    FormsComponent.prototype.ngOnInit = function () {
        utils_component_1.UtilsComponent.prototype.loadScript("bower_components/materialize/extras/noUiSlider/nouislider.min.js", function () {
            var slider = document.getElementById('range-input');
            noUiSlider.create(slider, {
                start: [20, 80],
                connect: true,
                step: 1,
                range: {
                    'min': 0,
                    'max': 100
                },
                format: wNumb({
                    decimals: 0
                })
            });
        });
    };
    FormsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/components/forms/forms.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FormsComponent);
    return FormsComponent;
}());
exports.FormsComponent = FormsComponent;
//# sourceMappingURL=forms.component.js.map