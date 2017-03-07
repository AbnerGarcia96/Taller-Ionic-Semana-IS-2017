import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	posts: FirebaseListObservable<any>;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public af: AngularFire
	){
		// window.localStorage.removeItem('currentUser');
		if(!this.isLoggedIn()){
			console.log('Usuario registrado');
			this.navCtrl.push(LoginPage);
		}else{
			this.getPosts();
		}
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
