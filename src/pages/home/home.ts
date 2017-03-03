import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomKeyBoard } from '../../components/customKeyBoard/custom-keyboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Hexadecimal input string
  public hexStr: string;

  constructor(public navCtrl: NavController)
  {
    this.hexStr = "";

    // Subscribe to the click event observable
    // Here we add the clicked key value to the string 
    CustomKeyBoard.onCKClick.subscribe((key) => {
      this.hexStr += key;
    })

    // Subscribe to the delete event observable 
    // Here we delete the last character of the string   
    CustomKeyBoard.onDeleteClick.subscribe(() => {
      this.hexStr = this.hexStr.slice(0, this.hexStr.length -1);
    })
  }

  // Show keyboard button
  public showKeyboard()
  {
    CustomKeyBoard.show();
  }

  // Hide keyboard function
  public hideKeyboard()
  {
    CustomKeyBoard.hide();
  }
}
