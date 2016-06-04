/*
 * These are globally available directives in any template
 */
"use strict";
var core_1 = require('@angular/core');
// Angular 2 Router
// import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
// Angular 2 Material 2
// TODO(gdi2290): replace with @angular2-material/all
// import {MATERIAL_DIRECTIVES} from './angular2-material2';
// application_directives: directives that are global through out the application
exports.APPLICATION_DIRECTIVES = [];
exports.DIRECTIVES = [
    { provide: core_1.PLATFORM_DIRECTIVES, multi: true, useValue: exports.APPLICATION_DIRECTIVES }
];
//# sourceMappingURL=directives.js.map