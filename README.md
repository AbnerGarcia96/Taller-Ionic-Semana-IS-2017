# Bienvenidos al curso de Ionic 2 con Firebase

##### Aquí está el proyecto terminado, se encuentra en la carpeta "taller-ionic-2"

Primero que todo, gracias por ser parte de la Semana de la Carrera, para objetivos de retroalimentación, te pido que llenes [esta encuesta](https://goo.gl/forms/oCRwYteXaPVsGF5Z2).

Para probarlo, les sugiero que instalen Android Studio o Genymotion y corran los siguientes comandos:

```shell
$ cd ./taller-ionic-2
$ ionic platform add android
$ ionic build android
$ ionic run android # Si usas Genymotion
$ ionic emulate android # Si usas Android Studio
```

Para generar el .apk debes correr los siguientes comandos:

```shell
$ cordova plugin rm cordova-plugin-console
$ cordova build --release android
```

Como alternativa para generar el .apk, ionic nos ofrece una aplicación llamada [Ionic View](http://view.ionic.io/?_ga=1.155478332.644755356.1482915484) que nos permite probar las aplicaciones, lo único que necesitan hacer es insertar al App ID del taller: __452bd9d5__

##### Algunos sitios de interés:
* [Sitio oficial de Ionic](http://ionicframework.com/)
* [Documentación de AngularFire2](https://github.com/angular/angularfire2)
* [Documentación de Firebase](https://firebase.google.com/docs/)

> "Those who can imagine anything, can create the impossible".
--- Alan Turing