import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      <!-- {{rando}} -->

      <button>{{ value }}</button>

    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O' = "X";


  //*******************
  //rando = Math.random();

  //*******************
  // rando: number | undefined;

  // constructor() { 
  //   setInterval(() => this.rando = Math.random(), 500);

  // }
  //*******************

  // ngOnInit(): void {
  // }

}
