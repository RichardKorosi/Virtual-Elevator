import { Component } from '@angular/core';
import { ElevatorInfoService } from './elevator-info.service';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendAngular';

  elevator = NONE_TYPE;
  floors = [];
  operatorCurrentFloor = 0;


  constructor(private elevatorInfoService: ElevatorInfoService
  ){
    this.getInitialInfo();
  }


  getElevatorInfo(): void {
    this.elevatorInfoService.getElevatorInfo().subscribe(data => {
      console.log(data);
    });
  }

  getInitialInfo(): void {
    this.elevatorInfoService.getInitialInfo().subscribe(data => {
      console.log(data);
      this.elevator = data.elevator;
      this.floors = data.floors;
      this.operatorCurrentFloor = data.operatorCurrentFloor;
      console.log("Elevator", this.elevator);
      console.log("Floors", this.floors);
      console.log("OperatorCurrent", this.operatorCurrentFloor);
    });
  }
}
