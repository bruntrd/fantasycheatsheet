import { Component } from '@angular/core';
import { Cheatsheet } from './cheatsheet/cheatsheet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newCheatsheet: Cheatsheet = {type : '', count : 0, name : '', rankings: []}

  onNewCheatsheet(cheatsheet) {
    console.log(cheatsheet);
    this.newCheatsheet = cheatsheet;
  }
}
