import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, ModalController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { HomePage } from '../home/home';
import { EditPostPage } from '../edit-post/edit-post';

@Component({
	selector: 'page-my-posts',
	templateUrl: 'my-posts.html'
})

export class MyPostsPage {
	myPosts: FirebaseListObservable<any>;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private af: AngularFire,
		private alertCtrl: AlertController,
		private toastCtrl: ToastController,
		private modalCtrl: ModalController
	){
		let currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
		this.myPosts = af.database.list('posts', {
			query: {
				orderByChild: 'userId',
				equalTo: currentUser.id
			}
		});
	}

	deletePost(post){
		let confirm = this.alertCtrl.create({
			title: 'Eliminar post',
			message: '¿Está seguro que quiere eliminar este post?',
			buttons: [{
					text: 'Cancelar',
					role: 'cancel',
					handler: () => {}
				},{
					text: 'Ok',
					handler: () => {
						// console.log(post);
						this.myPosts.remove(post.$key).then((r) => {
							this.showToast('El post se ha borrado exitosamente');
							this.navCtrl.setRoot(HomePage);
						}).catch((e) => console.error(e));
					}
				}
			]});
		confirm.present();
	}

	editPost(post){
		let postModal = this.modalCtrl.create(EditPostPage, {post: post});
		postModal.present();
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
		console.log('ionViewDidLoad MyPostsPage');
	}

}
