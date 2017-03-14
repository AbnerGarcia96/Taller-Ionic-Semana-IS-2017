import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@Component({
	selector: 'page-detalle-post',
	templateUrl: 'detalle-post.html'
})

export class DetallePostPage {
	post: any;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public alertCtrl: AlertController
	){
		this.post = navParams.get('post');
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
	}

	dismiss(){
		this.viewCtrl.dismiss();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetallePostPage');
	}

}