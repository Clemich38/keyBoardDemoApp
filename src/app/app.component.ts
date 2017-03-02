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
  keysSec: string[];

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.keysMain = [ "1", "2", "3", "A", "B",
                      "4", "5", "6", "C", "D",
                      "7", "8", "9", "E", "F",
                      "", "0", "", "", ""];

    
  }


  ngOnInit()
  {
    CustomKeyBoard.hide();
  }
  
  // Event way
  keyClick(key: number) {
    console.log('From event: ', key);
  }
}
