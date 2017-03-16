import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, ToastController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'page-detalle-post',
	templateUrl: 'detalle-post.html'
})

export class DetallePostPage {
	post: any;
	comments: FirebaseListObservable<any>;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public alertCtrl: AlertController,
		private af: AngularFire,
		private toastCtrl: ToastController
	){
		this.post = navParams.get('post');
		this.comments = af.database.list('posts/'+this.post.$key+'/comments/');
	}

	showPrompt(){
		let prompt = this.alertCtrl.create({
			title: 'Escriba su comentario',
			inputs:[
				{
					name: 'comment',
					placeholder: 'Escribí algo'
				}
			],
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					handler: data => {}
				},{
					text: 'Enviar',
					handler: data => { this.addComment(data.comment) }
				}
			]
		});
		prompt.present();
	}

	addComment(comment){
		console.log('Comentario:',comment);
		let user = JSON.parse(window.localStorage.getItem('currentUser'));
		this.comments.push({
			user: user.email,
			image: user.image,
			comment: comment
		}).then(r => {
			this.showToast('Comentario agregado exitosamente');
		}).catch(e => {
			this.showToast('No se pudo agregar el comentario');
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

	dismiss(){
		this.viewCtrl.dismiss();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetallePostPage');
	}

}