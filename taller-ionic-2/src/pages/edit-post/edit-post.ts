import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { HomePage } from '../home/home';

@Component({
	selector: 'page-edit-post',
	templateUrl: 'edit-post.html'
})

export class EditPostPage {
	afPost: FirebaseObjectObservable<any>;
	title: any;
	content: any;
	image: any;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private af: AngularFire,
		private viewCtrl: ViewController,
		private toastCtrl: ToastController
	){
		let post = navParams.get('post');
		let postId = post.$key;
		this.title = post.title;
		this.content = post.content;
		this.image = post.image;
		console.log(postId);
		this.afPost = af.database.object('posts/'+postId);
	}

	editPost(){
		this.afPost.update({
			title: this.title,
			content: this.content,
			image: this.image
		}).then((r) => {
			this.showToast('Post editado exitosamente');
			this.navCtrl.setRoot(HomePage);
		}).catch((e) => console.error(e));
	}

	dismiss(){
		this.viewCtrl.dismiss();
	}

	showToast(message){
		let toast = this.toastCtrl.create({
			message: message,
			position: 'top',
			duration: 2000,
			showCloseButton: false
		});
		toast.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditPostPage');
	}

}
