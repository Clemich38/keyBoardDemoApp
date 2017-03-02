import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { CustomKeyBoard } from '../components/customKeyBoard/custom-keyboard';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  keysMain: string[];

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.keysMain = [ "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c" ];
    
  }

  // Event way
  keyClick(key: number) {
    console.log('From event: ', key);
  }
}
