import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { LoginPage } from '../login/login';
import { DetallePostPage } from '../detalle-post/detalle-post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	afPosts: FirebaseListObservable<any>;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public af: AngularFire,
		private modalCtrl: ModalController
	){
		// window.localStorage.removeItem('currentUser');
		if(!this.isLoggedIn()){
			console.log('Usuario no registrado');
			this.navCtrl.push(LoginPage);
		}else{
			this.afPosts = af.database.list('/posts');
		}
	}

	showModal(post){
		let postModal = this.modalCtrl.create(DetallePostPage, {post: post});
		postModal.present();
	}

	isLoggedIn(){
		if(window.localStorage.getItem('currentUser')){
			return true;
		}else{
			return false;
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}
}
