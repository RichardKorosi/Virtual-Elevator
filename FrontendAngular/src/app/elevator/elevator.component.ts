import { Component } from '@angular/core';
import { FloorComponent } from '../floor/floor.component';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrl: './elevator.component.css'
})
export class ElevatorComponent {
  movement: number;
  isDoorOpen: boolean;
  peopleInside: number;
  currentFloor: number;
  floors: FloorComponent[];

  constructor() {
    this.movement = 0;
    this.isDoorOpen = false;
    this.peopleInside = 0;
    this.currentFloor = 0;
    this.floors = [];
  }

}
