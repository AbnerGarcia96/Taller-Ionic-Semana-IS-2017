import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-detalle-post',
	templateUrl: 'detalle-post.html'
})

export class DetallePostPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams
	){}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetallePostPage');
	}

}