import {Component, Input, OnInit} from '@angular/core';
import {Cheatsheet} from '../cheatsheet.model';
import {Player} from '../cheatsheet-player.model';
import {CheatsheetService} from '../cheatsheet.service';

@Component({
  selector: 'app-cheatsheet-main',
  templateUrl: './cheatsheet-main.component.html'
})

export class CheatsheetMainComponent implements OnInit {
  @Input() newCheatsheet: Cheatsheet;
  constructor(public cheatsheetService: CheatsheetService) {}
  players: Player[] = [];
  saveCheatsheet() {
    console.log(this.newCheatsheet);
    this.cheatsheetService.addCheatsheet(this.newCheatsheet);
  }
  createPlayer(first, last, team, rank, position) {
    const newPlayer: Player = {firstName: first, lastName: last, team: team, ranking: rank, position: position};
    return newPlayer;
  }

  ngOnInit(): void {
    // get players
    this.players.push(this.createPlayer('Aaron', 'Rodgers', 'Green Bay Packers', 1, 'QB'));
    this.players.push(this.createPlayer('Aaron', 'Jones', 'Green Bay Packers', 2, 'RB'));
    this.players.push(this.createPlayer('Davante', 'Adams', 'Green Bay Packers', 3, 'WR'));
  }
}
