import { Component } from '@angular/core';
import { UtilsComponent } from 'app/shared/utils.component';

declare var noUiSlider:any;
declare var wNumb:any;
@Component({
    templateUrl: 'app/components/forms/forms.component.html'
})
export class FormsComponent {
    ngOnInit() {
        UtilsComponent.prototype.loadScript("bower_components/materialize/extras/noUiSlider/nouislider.min.js", function(){ 
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
    }
}