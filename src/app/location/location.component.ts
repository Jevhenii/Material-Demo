
import { Component } from '@angular/core';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  public user: any = {
    name: 'Yevhenii',
    surname: 'Podkorytov'
  };


   public setStyles = {
     sectionBorder: 'sectionBorder'
   };

   public setFonts = {
     mainParagraph: 'mainParagraph',
     bigHeading: 'bigHeading'
   }


   public myClass = 'red';
   public myColor = 'white';
   public selectedUser;


  constructor () {
      setTimeout(() => {
        this.myClass = 'green';
        setTimeout(() => {
          this.myClass = 'blue';
        }, 2000)
      }, 2000)
  }

  changeColor(color) {
    this.myColor = color;
  }

  public isShown = true;

  public items = [
    {name: 'Jevhenii'},
    {name: 'Podkoritov'},
    {name: 'Programmer'}
  ]
}
