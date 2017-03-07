import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-nuevo-post',
	templateUrl: 'nuevo-post.html'
})

export class NuevoPostPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams
	){}

	agregarPost(){
		console.log('Agregando post')
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad NuevoPostPage');
	}

}
