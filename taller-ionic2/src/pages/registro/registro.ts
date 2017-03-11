import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire } from 'angularfire2';

import { HomePage } from '../home/home';

@Component({
	selector: 'page-registro',
	templateUrl: 'registro.html'
})

export class RegistroPage{
	nombre: any;
	apellido: any;
	email: any;
	password: any;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private af: AngularFire
	){}

	register(){
		this.af.auth.createUser({
			email: this.email,
			password: this.password
		}).then((r) => {
			let nombreCompleto = this.nombre + this.apellido;
			r.auth.displayName = nombreCompleto;
			let currentUser = {
				email: r.auth.email,
				name: r.auth.displayName
			};
			window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
			this.navCtrl.push(HomePage);
		}).catch((e) => {
			console.error(e);
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegistroPage');
	}
}
