import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { AngularFire } from 'angularfire2';

import { HomePage } from '../pages/home/home';
import { NuevoPostPage } from '../pages/nuevo-post/nuevo-post';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    private af: AngularFire
  ){
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Nuevo Post', component: NuevoPostPage }
    ];
  }

  logout(){
    console.log('Cerrando sesión');
    this.af.auth.logout();
    window.localStorage.removeItem('currentUser');
    this.nav.push(LoginPage);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
