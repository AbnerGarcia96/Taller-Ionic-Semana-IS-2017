import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFire, AuthMethods, AuthProviders, FirebaseObjectObservable } from 'angularfire2';

import { HomePage } from '../home/home'
import { RegistroPage } from '../registro/registro'

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {
	email: any;
	password: any;
	user: FirebaseObjectObservable<any>;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public af: AngularFire,
		private toastCtrl: ToastController
	){}

	login(){
		if(this.email && this.password){
			this.af.auth.login({
				email: this.email,
				password: this.password
			},{
				provider: AuthProviders.Password,
				method: AuthMethods.Password
			}).then((r) => {
				// console.log(r);
				let currentUser = {
					id: r.uid,
					email: r.auth.email,
					name: r.auth.displayName,
					image: 'https://lh3.googleusercontent.com/-cOXl_vZ6sDI/AAAAAAAAAAI/AAAAAAAAAAA/GQmyvunLZzc/photo.jpg'
				};
				window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
				this.navCtrl.setRoot(HomePage);
			}).catch((e) => {
				// console.error(JSON.stringify(e));
				this.showToast('El Correo y la contraseña no coinciden');
			});
		}else{
			this.showToast('Debe ingresar su correo y contraseña');
		}
	}

	facebookLogin(){
		this.af.auth.login({
			provider: AuthProviders.Facebook,
			method: AuthMethods.Popup
		}).then((r) => {
			let currentUser = {
				id: r.uid,
				email: r.auth.email,
				name: r.auth.displayName,
				image: r.auth.photoURL
			};
			this.registrarUsuario(currentUser);
			window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
			this.navCtrl.pop(HomePage);
		}).catch((e) => {
			console.log(JSON.stringify(e));
		});
	}

	googleLogin(){
		this.af.auth.login({
			provider: AuthProviders.Google,
			method: AuthMethods.Popup
		}).then((r) => {
			let currentUser = {
				id: r.uid,
				email: r.auth.email,
				name: r.auth.displayName,
				image: r.auth.photoURL
			};
			this.registrarUsuario(currentUser);
			window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
			this.navCtrl.pop(HomePage);
		}).catch((e) => {
			console.log(JSON.stringify(e));
		});
	}

	registrarUsuario(currentUser){
		this.user = this.af.database.object('users/'+currentUser.id);
		console.log(currentUser);
		this.user.set({
			email: currentUser.email,
			name: currentUser.name,
			image: currentUser.image
		});
	}

	goToRegister(){
		this.navCtrl.push(RegistroPage);
	}

	showToast(message){
		let toast = this.toastCtrl.create({
			message: message,
			position: 'top',
			showCloseButton: true,
			closeButtonText: 'Ok'
		});
		toast.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}
}
