import {Component, EventEmitter, Output} from '@angular/core';
import {Cheatsheet} from '../cheatsheet.model';
import {NgForm} from '@angular/forms';
import {CheatsheetService} from '../cheatsheet.service';

@Component({
  selector: 'app-cheatsheet-create',
  templateUrl: './cheatsheet-create.component.html',

})
export class CheatsheetCreateComponent {

  @Output() newCheatsheetCreated = new EventEmitter();
  constructor(public cheatsheetService: CheatsheetService) {}

  createCheatsheet(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const newCheatsheet: Cheatsheet = {
      name: form.value.cheatsheetName,
      type: form.value.typeField,
      count: form.value.playerField,
      rankings: []
    };

    console.log(newCheatsheet);
    this.newCheatsheetCreated.emit(newCheatsheet);
    // this.cheatsheetService.addCheatsheet(newCheatsheet);
  }
}
