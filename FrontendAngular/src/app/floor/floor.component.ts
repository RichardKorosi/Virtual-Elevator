import { Component } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrl: './floor.component.css'
})
export class FloorComponent {
  floorNumber: number;
  continueUp: boolean;
  continueDown: boolean;
  isTarget: boolean;
  isSummoned: boolean;
  isOperatorFloor: boolean;

  constructor() {
    this.floorNumber = 0;
    this.continueUp = false;
    this.continueDown = false;
    this.isTarget = false;
    this.isSummoned = false;
    this.isOperatorFloor = false;
  }
}
