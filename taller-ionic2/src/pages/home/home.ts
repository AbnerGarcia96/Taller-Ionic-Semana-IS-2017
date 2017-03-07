import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController, public navParams: NavParams){
		window.localStorage.removeItem('currentUser');
		if(!this.isLoggedIn()){
			console.log('Usuario registrado');
			this.navCtrl.setRoot(LoginPage);
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

	isLoggedIn(){
		if(window.localStorage.getItem('currentUser')){
			return true;
		}else{
			return false;
		}
	}
}
