import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
	selector: 'page-registro',
	templateUrl: 'registro.html'
})

export class RegistroPage{
	nombre: any;
	apellido: any;
	email: any;
	password: any;
	user: FirebaseObjectObservable<any>;

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
			let nombreCompleto:any = this.nombre +" "+ this.apellido;
			this.user = this.af.database.object('users/'+r.uid);
			this.user.set({
				email: this.email,
				name: nombreCompleto,
				image: 'https://lh3.googleusercontent.com/-cOXl_vZ6sDI/AAAAAAAAAAI/AAAAAAAAAAA/GQmyvunLZzc/photo.jpg'
			});
			this.navCtrl.push(LoginPage);
		}).catch((e) => {
			console.error(e);
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegistroPage');
	}
}
