import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { HomePage } from '../home/home';

@Component({
	selector: 'page-nuevo-post',
	templateUrl: 'nuevo-post.html'
})

export class NuevoPostPage {
	userId: any;
	userImage: any;
	title: any;
	content: any;
	image: any;
	date: any;
	afPost: FirebaseListObservable<any>;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private af: AngularFire,
		private toastCtrl: ToastController
	){
		this.afPost = af.database.list('posts/');
		let now = new Date();
		this.date = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();
	}

	agregarPost(){
		console.log('Agregando post');
		let currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
		this.afPost.push({
			userId: currentUser.id,
			userImage: currentUser.image,
			title: this.title,
			content: this.content,
			image: this.image,
			date: this.date
		}).then((r) => {
			this.showToast('Post agregado satisfactoriamente');
			this.navCtrl.setRoot(HomePage);
		}).catch((e) => {
			console.error(e);
		});
	}

	showToast(message){
		let toast = this.toastCtrl.create({
			message: message,
			position: 'top',
			duration: 3000,
			showCloseButton: false
		});
		toast.present();
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad NuevoPostPage');
	}
}
