import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

import { HomePage } from '../home/home'

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {
	email: any;
	password: any;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public af: AngularFire
	){}

	login(){
		this.af.auth.login({
			email: this.email,
			password: this.password
		},{
			provider: AuthProviders.Password,
			method: AuthMethods.Password
		}).then((r) => {
			console.log(r);
			let currentUser = {
				email: r.auth.email
			};
			window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
			this.navCtrl.pop(HomePage);
		}).catch((e) => {
			console.error(JSON.stringify(e));
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}
}
