import {Cheatsheet} from './cheatsheet.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CheatsheetService {
  private cheatsheets: Cheatsheet[] = [];
  private cheatsheetsUpdated = new Subject<Cheatsheet[]>();

  getCheatsheets() {
    return [...this.cheatsheets];
  }

  getCheatsheetsUpdatedListener() {
    return this.cheatsheetsUpdated.asObservable();
  }

  addCheatsheet(cheatSheet) {
    this.cheatsheets.push(cheatSheet);
    this.cheatsheetsUpdated.next([...this.cheatsheets]);
    console.log(this.cheatsheets);
  }
}
