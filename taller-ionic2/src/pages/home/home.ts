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
	posts: FirebaseListObservable<any>;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public af: AngularFire,
		private modalCtrl: ModalController
	){
		// window.localStorage.removeItem('currentUser');
		if(!this.isLoggedIn()){
			console.log('Usuario registrado');
			this.navCtrl.push(LoginPage);
		}else{
			this.getPosts();
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

	getPosts(){
		this.posts = this.af.database.list('/posts');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}
}
