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

  keysTab: string[];

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // Keyboard key tab (used in the app.html template)
    this.keysTab = [ "1", "2", "3", "A", "B",
                      "4", "5", "6", "C", "D",
                      "7", "8", "9", "E", "F",
                      "", "0", "", "", ""];

    // this.keysTab = ["1", "2", "3", "+", "-",
    //                 "4", "5", "6", "/", "*",
    //                 "7", "8", ".", "%", "="];
  }


  ngOnInit()
  {
    CustomKeyBoard.hide();
  }
  
  // Event emitter
  keyClick(key: number) {
    console.log('Event emitter - key: ', key);
  }
}
