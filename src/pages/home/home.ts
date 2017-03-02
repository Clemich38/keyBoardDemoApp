import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomKeyBoard } from '../../components/customKeyBoard/custom-keyboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController)
  {
    // Subscribe to the click event observable    
    CustomKeyBoard.onCKClick.subscribe((key) => {
      console.log('Click key ', key);
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
