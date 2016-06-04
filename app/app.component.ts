/*
 * Angular 2 decorators and services
 */
import {Component, ElementRef, AfterViewChecked, ViewEncapsulation} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { UtilsComponent } from './shared/utils.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ColorComponent } from './css/color/color.component';
import { GridComponent } from './css/grid/grid.component';
import { HelpersComponent } from './css/helpers/helpers.component';
import { MediaCssComponent } from './css/media/media.component';
import { SassComponent } from './css/sass/sass.component';
import { ShadowComponent } from './css/shadow/shadow.component';
import { TableComponent } from './css/table/table.component';
import { TypographyComponent } from './css/typography/typography.component';
//Materialize Components
import { BadgesComponent } from './components/badges/badges.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChipsComponent } from './components/chips/chips.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsComponent } from './components/forms/forms.component';
import { IconsComponent } from './components/icons/icons.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
//Materialize Javascript
import { CollapsibleComponent } from './javascript/collapsible/collapsible.component';
import { DialogsComponent } from './javascript/dialogs/dialogs.component';
import { DropdownComponent } from './javascript/dropdown/dropdown.component';
import { MediaComponent } from './javascript/media/media.component';
import { ModalsComponent } from './javascript/modals/modals.component';
import { ParallaxComponent } from './javascript/parallax/parallax.component';
import { ParallaxDemoComponent } from './javascript/parallax-demo/parallax-demo.component';
import { PushpinComponent } from './javascript/pushpin/pushpin.component';
import { ScrollfireComponent } from './javascript/scrollfire/scrollfire.component';
import { ScrollspyComponent } from './javascript/scrollspy/scrollspy.component';
import { SidenavComponent } from './javascript/side-nav/side-nav.component';
import { TabsComponent } from './javascript/tabs/tabs.component';
import { TransitionsComponent } from './javascript/transitions/transitions.component';
import { WavesComponent } from './javascript/waves/waves.component';
//
import { MobileComponent } from './mobile/mobile.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import {AppState} from './app.service';
// import {RouterActive} from './router-active';

/*
 * App Component
 * Top Level Component
 */
declare var $:any;

@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ROUTER_PROVIDERS ],
  directives: [ROUTER_DIRECTIVES ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <header>
      <div class="container"><a href="#" data-activates="nav-mobile" class="button-collapse top-nav waves-effect waves-light circle hide-on-large-only"><i class="material-icons">menu</i></a></div>
      <ul id="nav-mobile" class="side-nav fixed">
        <li class="logo">
            <a [routerLink]="['/home']" id="logo-container" class="brand-logo">
                <img id="front-page-logo" type="image/svg+xml" src="res/materialize.svg"/>
            </a>
        </li>
        <li class="search">
            <div class="search-wrapper card">
            <input id="search"><i class="material-icons">search</i>
            <div class="search-results"></div>
            </div>
        </li>
        <li class="bold"><a [routerLink]="['/about']" class="waves-effect waves-teal">About</a></li>
        <li class="bold"><a [routerLink]="['/getting-started']" class="waves-effect waves-teal">Getting Started</a></li>
        <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li class="bold"><a class="collapsible-header  waves-effect waves-teal">CSS</a>
                  <div class="collapsible-body">
                  <ul>
                      <li><a [routerLink]="['/color']">Color</a></li>
                      <li><a [routerLink]="['/grid']">Grid</a></li>
                      <li><a [routerLink]="['/helpers']">Helpers</a></li>
                      <li><a [routerLink]="['/media-css']">Media</a></li>
                      <li><a [routerLink]="['/sass']">Sass</a></li>
                      <li><a [routerLink]="['/shadow']">Shadow</a></li>
                      <li><a [routerLink]="['/table']">Table</a></li>
                      <li><a [routerLink]="['/typography']">Typography</a></li>
                  </ul>
                  </div>
              </li>
              <li class="bold"><a class="collapsible-header  waves-effect waves-teal">Components</a>
                  <div class="collapsible-body">
                  <ul>
                      <li><a [routerLink]="['/badges']">Badges</a></li>
                      <li><a [routerLink]="['/buttons']">Buttons</a></li>
                      <li><a [routerLink]="['/breadcrumbs']">Breadcrumbs</a></li>
                      <li><a [routerLink]="['/cards']">Cards</a></li>
                      <li><a [routerLink]="['/chips']">Chips</a></li>
                      <li><a [routerLink]="['/collections']">Collections</a></li>
                      <li><a [routerLink]="['/footer']">Footer</a></li>
                      <li><a [routerLink]="['/forms']">Forms</a></li>
                      <li><a [routerLink]="['/icons']">Icons</a></li>
                      <li><a [routerLink]="['/navbar']">Navbar</a></li>
                      <li><a [routerLink]="['/pagination']">Pagination</a></li>
                      <li><a [routerLink]="['/preloader']">Preloader</a></li>
                  </ul>
                  </div>
              </li>
              <li class="bold"><a class="collapsible-header  waves-effect waves-teal">JavaScript</a>
                  <div class="collapsible-body">
                  <ul>
                      <li><a [routerLink]="['/collapsible']">Collapsible</a></li>
                      <li><a [routerLink]="['/dialogs']">Dialogs</a></li>
                      <li><a [routerLink]="['/dropdown']">Dropdown</a></li>
                      <li><a [routerLink]="['/media']">Media</a></li>
                      <li><a [routerLink]="['/modals']">Modals</a></li>
                      <li><a [routerLink]="['/parallax']">Parallax</a></li>
                      <li><a [routerLink]="['/pushpin']">Pushpin</a></li>
                      <li><a [routerLink]="['/scrollfire']">ScrollFire</a></li>
                      <li><a [routerLink]="['/scrollspy']">Scrollspy</a></li>
                      <li><a [routerLink]="['/side-nav']">SideNav</a></li>
                      <li><a [routerLink]="['/tabs']">Tabs</a></li>
                      <li><a [routerLink]="['/transitions']">Transitions</a></li>
                      <li><a [routerLink]="['/waves']">Waves</a></li>
                  </ul>
                  </div>
              </li>
            </ul>
        </li>
        <li class="bold"><a [routerLink]="['/mobile']" class="waves-effect waves-teal">Mobile</a></li>
        <li class="bold"><a [routerLink]="['/showcase']" class="waves-effect waves-teal">Showcase</a></li>
    </ul>
    </header>
     <main>        
        <router-outlet></router-outlet>
     </main>
     <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l4 s12">
            <h5 class="white-text">Help Materialize Grow</h5>
            <p class="grey-text text-lighten-4">This project is originally from <a href="http://materializecss.com">http://materializecss.com</a>. It has been Angular2-rized for your enjoyment!</p>
          </div>
          <div class="col l4 s12">
            <h5 class="white-text">Join the Discussion</h5>
            <p class="grey-text text-lighten-4">We have a Gitter chat room set up where you can talk directly with us. Come in and discuss new features, future goals, general problems or questions, or anything else you can think of.</p>
            <a class="btn waves-effect waves-light red lighten-3" target="_blank" href="https://gitter.im/Dogfalo/materialize">Chat</a>
          </div>
          <div class="col l4 s12" style="overflow: hidden;">
            <h5 class="white-text">Connect</h5>
            <iframe src="http://ghbtns.com/github-btn.html?user=shadowminhja&repo=materialize-angular2&type=watch&count=true&size=large" allowtransparency="true" frameborder="0" scrolling="0" width="170" height="30"></iframe>
            <br>
            <div class="g-follow" data-annotation="bubble" data-height="24" data-href="https://plus.google.com/108619793845925798422" data-rel="publisher"></div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © 2014-2016 Materialize, All rights reserved.
        <a class="grey-text text-lighten-4 right" href="https://github.com/ShadowMinhja/materialize-angular2/blob/master/LICENSE">MIT License</a>
        </div>
      </div>
    </footer>
     `
})
@Routes([
  { path: '/',      component: HomeComponent },
  { path: '/home',  component: HomeComponent },
  { path: '/about', component: AboutComponent },
  { path: '/getting-started', component: GettingStartedComponent },
  //Component Routes
  { path: '/color', component: ColorComponent },
  { path: '/grid', component: GridComponent },
  { path: '/helpers', component: HelpersComponent },
  { path: '/media-css', component: MediaCssComponent },
  { path: '/sass', component: SassComponent },
  { path: '/shadow', component: ShadowComponent },
  { path: '/table', component: TableComponent },
  { path: '/typography', component: TypographyComponent },
  { path: '/badges', component: BadgesComponent },
  { path: '/buttons', component: ButtonsComponent },
  { path: '/breadcrumbs', component: BreadcrumbsComponent },
  { path: '/cards', component: CardsComponent },
  { path: '/chips', component: ChipsComponent },
  { path: '/collections', component: CollectionsComponent },
  { path: '/footer', component: FooterComponent },
  { path: '/forms', component: FormsComponent },
  { path: '/icons', component: IconsComponent },
  { path: '/navbar', component: NavbarComponent },
  { path: '/pagination', component: PaginationComponent },
  { path: '/preloader', component: PreloaderComponent },
  //Javascript Routes
  { path: '/collapsible', component: CollapsibleComponent },
  { path: '/dialogs', component: DialogsComponent },
  { path: '/dropdown', component: DropdownComponent },
  { path: '/media', component: MediaComponent },
  { path: '/modals', component: ModalsComponent },
  { path: '/parallax', component: ParallaxComponent },
  { path: '/parallax-demo', component: ParallaxDemoComponent },
  { path: '/pushpin', component: PushpinComponent },
  { path: '/scrollfire', component: ScrollfireComponent },
  { path: '/scrollspy', component: ScrollspyComponent },
  { path: '/side-nav', component: SidenavComponent },
  { path: '/tabs', component: TabsComponent },
  { path: '/transitions', component: TransitionsComponent },
  { path: '/waves', component: WavesComponent },
  //
  { path: '/mobile', component: MobileComponent },
  { path: '/showcase', component: ShowcaseComponent },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  // { path: '/about', loader: () => require('es6-promise!./about')('About') }
])

export class App implements AfterViewChecked {
  
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  
  constructor(
    public appState: AppState, private router: Router) {
    this.router.changes.subscribe(() => {
      UtilsComponent.prototype.loadScript("bower_components/prism/prism.js", function(){
        UtilsComponent.prototype.loadScript("assets/jade/lunr.min.js", function(){
          UtilsComponent.prototype.loadScript("assets/jade/search.js", function(){
            UtilsComponent.prototype.loadScript("./app/init.js", function(){});
          });
        });
      });
    });
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
    sideMenu();
  }
  
  ngAfterViewInit() {
    
  }
  
  ngAfterViewChecked() {

  }
  

}

function sideMenu() {  
  //Sidemenu click events
    var sidenav = $("#nav-mobile");
    var menuItems = sidenav.find("div.collapsible-body li");
    var menuHeaders = $("a.waves-effect");
    menuHeaders.click(function () {
      var clickedItem = $(this);
      menuHeaders.each(function() {
        if(clickedItem.context.innerText != $(this).context.innerText){
          if($(this).attr("class") != undefined && $(this).attr("class").indexOf("active") > -1)
            $(this).removeClass("active");
          $(this).parent().find("div.collapsible-body").hide();
        }
      });
      
      menuItems.each(function(){
        if($(this).attr("class") != undefined && $(this).attr("class").indexOf("active") > -1)
          $(this).removeClass("active");
      });
    });
    menuItems.each(function(){
      $(this).click(function() {
        menuItems.each(function(){
          if($(this).attr("class") != undefined && $(this).attr("class").indexOf("active") > -1)
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
