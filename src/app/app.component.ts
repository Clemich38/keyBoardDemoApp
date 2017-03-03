import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { CustomKeyBoard } from '../components/customKeyBoard/custom-keyboard';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  keysTab: string[];

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // Keyboard key tab (used in the app.html template)
    this.keysTab = [ "1", "2", "3", "A", "B",
                      "4", "5", "6", "C", "D",
                      "7", "8", "9", "E", "F",
                      "", "0", "", "", ""];
  }


  ngOnInit()
  {
    CustomKeyBoard.hide();
  }
  
  // Event emitter
  keyClick(k: string) {
    console.log('Event emitter - key: ', k);
  }
}
