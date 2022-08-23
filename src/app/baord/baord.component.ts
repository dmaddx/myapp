import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baord',
  templateUrl: './baord.component.html',
  styleUrls: ['./baord.component.scss']
})
export class BaordComponent implements OnInit {
  squares!: any[];
  xIsNext!: boolean;
  winner: string | null = null;


  constructor() { }

  ngOnInit() {
    this.newGame();
  }


  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

}
