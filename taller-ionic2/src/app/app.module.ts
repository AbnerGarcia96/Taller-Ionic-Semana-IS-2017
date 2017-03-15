import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2'

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NuevoPostPage } from '../pages/nuevo-post/nuevo-post';
import { RegistroPage } from '../pages/registro/registro';
import { DetallePostPage } from '../pages/detalle-post/detalle-post';
import { MyPostsPage } from '../pages/my-posts/my-posts';
import { EditPostPage } from '../pages/edit-post/edit-post';

const config = {
  apiKey: "AIzaSyC7UYS0HjJCX6DuKONpGztIWZPeyheWHkc",
  authDomain: "test-af159.firebaseapp.com",
  databaseURL: "https://test-af159.firebaseio.com",
  storageBucket: "test-af159.appspot.com",
  messagingSenderId: "889459276775"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NuevoPostPage,
    RegistroPage,
    DetallePostPage,
    MyPostsPage,
    EditPostPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NuevoPostPage,
    RegistroPage,
    DetallePostPage,
    MyPostsPage,
    EditPostPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
