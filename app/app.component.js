"use strict";
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var utils_component_1 = require('./shared/utils.component');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var getting_started_component_1 = require('./getting-started/getting-started.component');
var color_component_1 = require('./css/color/color.component');
var grid_component_1 = require('./css/grid/grid.component');
var helpers_component_1 = require('./css/helpers/helpers.component');
var media_component_1 = require('./css/media/media.component');
var sass_component_1 = require('./css/sass/sass.component');
var shadow_component_1 = require('./css/shadow/shadow.component');
var table_component_1 = require('./css/table/table.component');
var typography_component_1 = require('./css/typography/typography.component');
//Materialize Components
var badges_component_1 = require('./components/badges/badges.component');
var buttons_component_1 = require('./components/buttons/buttons.component');
var breadcrumbs_component_1 = require('./components/breadcrumbs/breadcrumbs.component');
var cards_component_1 = require('./components/cards/cards.component');
var chips_component_1 = require('./components/chips/chips.component');
var collections_component_1 = require('./components/collections/collections.component');
var footer_component_1 = require('./components/footer/footer.component');
var forms_component_1 = require('./components/forms/forms.component');
var icons_component_1 = require('./components/icons/icons.component');
var navbar_component_1 = require('./components/navbar/navbar.component');
var pagination_component_1 = require('./components/pagination/pagination.component');
var preloader_component_1 = require('./components/preloader/preloader.component');
//Materialize Javascript
var collapsible_component_1 = require('./javascript/collapsible/collapsible.component');
var dialogs_component_1 = require('./javascript/dialogs/dialogs.component');
var dropdown_component_1 = require('./javascript/dropdown/dropdown.component');
var media_component_2 = require('./javascript/media/media.component');
var modals_component_1 = require('./javascript/modals/modals.component');
var parallax_component_1 = require('./javascript/parallax/parallax.component');
var parallax_demo_component_1 = require('./javascript/parallax-demo/parallax-demo.component');
var pushpin_component_1 = require('./javascript/pushpin/pushpin.component');
var scrollfire_component_1 = require('./javascript/scrollfire/scrollfire.component');
var scrollspy_component_1 = require('./javascript/scrollspy/scrollspy.component');
var side_nav_component_1 = require('./javascript/side-nav/side-nav.component');
var tabs_component_1 = require('./javascript/tabs/tabs.component');
var transitions_component_1 = require('./javascript/transitions/transitions.component');
var waves_component_1 = require('./javascript/waves/waves.component');
//
var mobile_component_1 = require('./mobile/mobile.component');
var showcase_component_1 = require('./showcase/showcase.component');
var app_service_1 = require('./app.service');
var App = (function () {
    function App(appState, router) {
        this.appState = appState;
        this.router = router;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.loading = false;
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
        this.router.changes.subscribe(function () {
            utils_component_1.UtilsComponent.prototype.loadScript("bower_components/prism/prism.js", function () {
                utils_component_1.UtilsComponent.prototype.loadScript("assets/jade/lunr.min.js", function () {
                    utils_component_1.UtilsComponent.prototype.loadScript("assets/jade/search.js", function () {
                        utils_component_1.UtilsComponent.prototype.loadScript("./app/init.js", function () { });
                    });
                });
            });
        });
    }
    App.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
        sideMenu();
    };
    App.prototype.ngAfterViewInit = function () {
    };
    App.prototype.ngAfterViewChecked = function () {
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            pipes: [],
            providers: [router_1.ROUTER_PROVIDERS],
            directives: [router_1.ROUTER_DIRECTIVES],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n    <header>\n      <div class=\"container\"><a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse top-nav waves-effect waves-light circle hide-on-large-only\"><i class=\"material-icons\">menu</i></a></div>\n      <ul id=\"nav-mobile\" class=\"side-nav fixed\">\n        <li class=\"logo\">\n            <a [routerLink]=\"['/home']\" id=\"logo-container\" class=\"brand-logo\">\n                <img id=\"front-page-logo\" type=\"image/svg+xml\" src=\"res/materialize.svg\"/>\n            </a>\n        </li>\n        <li class=\"search\">\n            <div class=\"search-wrapper card\">\n            <input id=\"search\"><i class=\"material-icons\">search</i>\n            <div class=\"search-results\"></div>\n            </div>\n        </li>\n        <li class=\"bold\"><a [routerLink]=\"['/about']\" class=\"waves-effect waves-teal\">About</a></li>\n        <li class=\"bold\"><a [routerLink]=\"['/getting-started']\" class=\"waves-effect waves-teal\">Getting Started</a></li>\n        <li class=\"no-padding\">\n            <ul class=\"collapsible collapsible-accordion\">\n              <li class=\"bold\"><a class=\"collapsible-header  waves-effect waves-teal\">CSS</a>\n                  <div class=\"collapsible-body\">\n                  <ul>\n                      <li><a [routerLink]=\"['/color']\">Color</a></li>\n                      <li><a [routerLink]=\"['/grid']\">Grid</a></li>\n                      <li><a [routerLink]=\"['/helpers']\">Helpers</a></li>\n                      <li><a [routerLink]=\"['/media-css']\">Media</a></li>\n                      <li><a [routerLink]=\"['/sass']\">Sass</a></li>\n                      <li><a [routerLink]=\"['/shadow']\">Shadow</a></li>\n                      <li><a [routerLink]=\"['/table']\">Table</a></li>\n                      <li><a [routerLink]=\"['/typography']\">Typography</a></li>\n                  </ul>\n                  </div>\n              </li>\n              <li class=\"bold\"><a class=\"collapsible-header  waves-effect waves-teal\">Components</a>\n                  <div class=\"collapsible-body\">\n                  <ul>\n                      <li><a [routerLink]=\"['/badges']\">Badges</a></li>\n                      <li><a [routerLink]=\"['/buttons']\">Buttons</a></li>\n                      <li><a [routerLink]=\"['/breadcrumbs']\">Breadcrumbs</a></li>\n                      <li><a [routerLink]=\"['/cards']\">Cards</a></li>\n                      <li><a [routerLink]=\"['/chips']\">Chips</a></li>\n                      <li><a [routerLink]=\"['/collections']\">Collections</a></li>\n                      <li><a [routerLink]=\"['/footer']\">Footer</a></li>\n                      <li><a [routerLink]=\"['/forms']\">Forms</a></li>\n                      <li><a [routerLink]=\"['/icons']\">Icons</a></li>\n                      <li><a [routerLink]=\"['/navbar']\">Navbar</a></li>\n                      <li><a [routerLink]=\"['/pagination']\">Pagination</a></li>\n                      <li><a [routerLink]=\"['/preloader']\">Preloader</a></li>\n                  </ul>\n                  </div>\n              </li>\n              <li class=\"bold\"><a class=\"collapsible-header  waves-effect waves-teal\">JavaScript</a>\n                  <div class=\"collapsible-body\">\n                  <ul>\n                      <li><a [routerLink]=\"['/collapsible']\">Collapsible</a></li>\n                      <li><a [routerLink]=\"['/dialogs']\">Dialogs</a></li>\n                      <li><a [routerLink]=\"['/dropdown']\">Dropdown</a></li>\n                      <li><a [routerLink]=\"['/media']\">Media</a></li>\n                      <li><a [routerLink]=\"['/modals']\">Modals</a></li>\n                      <li><a [routerLink]=\"['/parallax']\">Parallax</a></li>\n                      <li><a [routerLink]=\"['/pushpin']\">Pushpin</a></li>\n                      <li><a [routerLink]=\"['/scrollfire']\">ScrollFire</a></li>\n                      <li><a [routerLink]=\"['/scrollspy']\">Scrollspy</a></li>\n                      <li><a [routerLink]=\"['/side-nav']\">SideNav</a></li>\n                      <li><a [routerLink]=\"['/tabs']\">Tabs</a></li>\n                      <li><a [routerLink]=\"['/transitions']\">Transitions</a></li>\n                      <li><a [routerLink]=\"['/waves']\">Waves</a></li>\n                  </ul>\n                  </div>\n              </li>\n            </ul>\n        </li>\n        <li class=\"bold\"><a [routerLink]=\"['/mobile']\" class=\"waves-effect waves-teal\">Mobile</a></li>\n        <li class=\"bold\"><a [routerLink]=\"['/showcase']\" class=\"waves-effect waves-teal\">Showcase</a></li>\n    </ul>\n    </header>\n     <main>        \n        <router-outlet></router-outlet>\n     </main>\n     <footer class=\"page-footer\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col l4 s12\">\n            <h5 class=\"white-text\">Help Materialize Grow</h5>\n            <p class=\"grey-text text-lighten-4\">This project is originally from <a href=\"http://materializecss.com\">http://materializecss.com</a>. It has been Angular2-rized for your enjoyment!</p>\n          </div>\n          <div class=\"col l4 s12\">\n            <h5 class=\"white-text\">Join the Discussion</h5>\n            <p class=\"grey-text text-lighten-4\">We have a Gitter chat room set up where you can talk directly with us. Come in and discuss new features, future goals, general problems or questions, or anything else you can think of.</p>\n            <a class=\"btn waves-effect waves-light red lighten-3\" target=\"_blank\" href=\"https://gitter.im/Dogfalo/materialize\">Chat</a>\n          </div>\n          <div class=\"col l4 s12\" style=\"overflow: hidden;\">\n            <h5 class=\"white-text\">Connect</h5>\n            <iframe src=\"http://ghbtns.com/github-btn.html?user=shadowminhja&repo=materialize-angular2&type=watch&count=true&size=large\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"0\" width=\"170\" height=\"30\"></iframe>\n            <br>\n            <div class=\"g-follow\" data-annotation=\"bubble\" data-height=\"24\" data-href=\"https://plus.google.com/108619793845925798422\" data-rel=\"publisher\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"footer-copyright\">\n        <div class=\"container\">\n        \u00A9 2014-2016 Materialize, All rights reserved.\n        <a class=\"grey-text text-lighten-4 right\" href=\"https://github.com/ShadowMinhja/materialize-angular2/blob/master/LICENSE\">MIT License</a>\n        </div>\n      </div>\n    </footer>\n     "
        }),
        router_1.Routes([
            { path: '/', component: home_component_1.HomeComponent },
            { path: '/home', component: home_component_1.HomeComponent },
            { path: '/about', component: about_component_1.AboutComponent },
            { path: '/getting-started', component: getting_started_component_1.GettingStartedComponent },
            //Component Routes
            { path: '/color', component: color_component_1.ColorComponent },
            { path: '/grid', component: grid_component_1.GridComponent },
            { path: '/helpers', component: helpers_component_1.HelpersComponent },
            { path: '/media-css', component: media_component_1.MediaCssComponent },
            { path: '/sass', component: sass_component_1.SassComponent },
            { path: '/shadow', component: shadow_component_1.ShadowComponent },
            { path: '/table', component: table_component_1.TableComponent },
            { path: '/typography', component: typography_component_1.TypographyComponent },
            { path: '/badges', component: badges_component_1.BadgesComponent },
            { path: '/buttons', component: buttons_component_1.ButtonsComponent },
            { path: '/breadcrumbs', component: breadcrumbs_component_1.BreadcrumbsComponent },
            { path: '/cards', component: cards_component_1.CardsComponent },
            { path: '/chips', component: chips_component_1.ChipsComponent },
            { path: '/collections', component: collections_component_1.CollectionsComponent },
            { path: '/footer', component: footer_component_1.FooterComponent },
            { path: '/forms', component: forms_component_1.FormsComponent },
            { path: '/icons', component: icons_component_1.IconsComponent },
            { path: '/navbar', component: navbar_component_1.NavbarComponent },
            { path: '/pagination', component: pagination_component_1.PaginationComponent },
            { path: '/preloader', component: preloader_component_1.PreloaderComponent },
            //Javascript Routes
            { path: '/collapsible', component: collapsible_component_1.CollapsibleComponent },
            { path: '/dialogs', component: dialogs_component_1.DialogsComponent },
            { path: '/dropdown', component: dropdown_component_1.DropdownComponent },
            { path: '/media', component: media_component_2.MediaComponent },
            { path: '/modals', component: modals_component_1.ModalsComponent },
            { path: '/parallax', component: parallax_component_1.ParallaxComponent },
            { path: '/parallax-demo', component: parallax_demo_component_1.ParallaxDemoComponent },
            { path: '/pushpin', component: pushpin_component_1.PushpinComponent },
            { path: '/scrollfire', component: scrollfire_component_1.ScrollfireComponent },
            { path: '/scrollspy', component: scrollspy_component_1.ScrollspyComponent },
            { path: '/side-nav', component: side_nav_component_1.SidenavComponent },
            { path: '/tabs', component: tabs_component_1.TabsComponent },
            { path: '/transitions', component: transitions_component_1.TransitionsComponent },
            { path: '/waves', component: waves_component_1.WavesComponent },
            //
            { path: '/mobile', component: mobile_component_1.MobileComponent },
            { path: '/showcase', component: showcase_component_1.ShowcaseComponent },
        ]), 
        __metadata('design:paramtypes', [app_service_1.AppState, router_1.Router])
    ], App);
    return App;
}());
exports.App = App;
function sideMenu() {
    //Sidemenu click events
    var sidenav = $("#nav-mobile");
    var menuItems = sidenav.find("div.collapsible-body li");
    var menuHeaders = $("a.waves-effect");
    menuHeaders.click(function () {
        var clickedItem = $(this);
        menuHeaders.each(function () {
            if (clickedItem.context.innerText != $(this).context.innerText) {
                if ($(this).attr("class") != undefined && $(this).attr("class").indexOf("active") > -1)
                    $(this).removeClass("active");
                $(this).parent().find("div.collapsible-body").hide();
            }
        });
        menuItems.each(function () {
            if ($(this).attr("class") != undefined && $(this).attr("class").indexOf("active") > -1)
                $(this).removeClass("active");
        });
    });
    menuItems.each(function () {
        $(this).click(function () {
            menuItems.each(function () {
                if ($(this).attr("class") != undefined && $(this).attr("class").indexOf("active") > -1)
                    $(this).removeClass("active");
            });
            $(this).addClass("active");
        });
    });
    //End SideMenu click Events
}
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
//# sourceMappingURL=app.component.js.map