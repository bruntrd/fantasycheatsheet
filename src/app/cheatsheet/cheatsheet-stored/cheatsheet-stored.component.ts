import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Cheatsheet} from '../cheatsheet.model';
import {CheatsheetService} from '../cheatsheet.service';

@Component({
  selector: 'app-cheatsheet-store',
  templateUrl: './cheatsheet-stored.component.html'
})

export class CheatsheetStoredComponent implements OnInit, OnDestroy {
  @Input() cheatsheets: Cheatsheet[] = [];
  private cheatsheetSub: Subscription;

  constructor(public cheatsheetService: CheatsheetService) {}

  ngOnInit() {
    this.cheatsheets = this.cheatsheetService.getCheatsheets();
    this.cheatsheetSub = this.cheatsheetService.getCheatsheetsUpdatedListener()
      .subscribe((cheatsheets: Cheatsheet[]) => {
        this.cheatsheets = cheatsheets;
      });
  }

  ngOnDestroy() {
    this.cheatsheetSub.unsubscribe();
  }

}
