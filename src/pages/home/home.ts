import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomKeyBoard } from '../../components/customKeyBoard/custom-keyboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public hexStr: string;

  constructor(public navCtrl: NavController)
  {
    this.hexStr = "";

    // Subscribe to the click event observable    
    CustomKeyBoard.onCKClick.subscribe((key) => {
      this.hexStr += key;
    })
  }

  public showKeyboard()
  {
    CustomKeyBoard.show();
  }

  public hideKeyboard()
  {
    CustomKeyBoard.hide();
  }



}
