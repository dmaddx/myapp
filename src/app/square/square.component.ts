import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <!-- <p> -->
      <!-- {{rando}} -->

      <!-- <button>{{ value }}</button>

    </p> -->

    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>

  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important;}'
  ]
})
export class SquareComponent {

  @Input() value: string = "X";


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
