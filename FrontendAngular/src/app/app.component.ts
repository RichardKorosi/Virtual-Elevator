import { Component } from '@angular/core';
import { ElevatorInfoService } from './elevator-info.service';
import { NONE_TYPE } from '@angular/compiler';
import { ElevatorComponent } from './elevator/elevator.component';
import { FloorComponent } from './floor/floor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendAngular';

  floors: FloorComponent[] = [];
  elevator : ElevatorComponent;
  operatorCurrentFloor : FloorComponent;


  constructor(private elevatorInfoService: ElevatorInfoService
  ){
    this.floors = new Array();
    this.elevator = new ElevatorComponent();
    this.operatorCurrentFloor = new FloorComponent();
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

      for (let i = data.floors.length - 1; i >= 0; i--) {
        let floor = new FloorComponent();
        floor.floorNumber = data.floors[i].floorNumber;
        floor.continueUp = data.floors[i].continueUp;
        floor.continueDown = data.floors[i].continueDown;
        floor.isTarget = data.floors[i].isTarget;
        this.floors.push(floor);
      }
     

      console.log(this.floors);

      this.elevator.movement = data.elevator.movement;
      this.elevator.isDoorOpen = data.elevator.isDoorOpen;
      this.elevator.peopleInside = data.elevator.peopleInside;
      this.elevator.currentFloor = data.elevator.currentFloor;
      this.elevator.floors = data.elevator.floors;

      console.log(this.elevator);

      this.operatorCurrentFloor.floorNumber = data.operatorCurrentFloor.floorNumber;
      this.operatorCurrentFloor.continueUp = data.operatorCurrentFloor.continueUp;
      this.operatorCurrentFloor.continueDown = data.operatorCurrentFloor.continueDown;
      this.operatorCurrentFloor.isTarget = data.operatorCurrentFloor.isTarget;
    });
  }

  changeOperatorFloor(floor: number): void {
    this.elevatorInfoService.changeOperatorFloor(floor).subscribe(floor => {
      this.operatorCurrentFloor.floorNumber = floor.floorNumber;
      this.operatorCurrentFloor.continueUp = floor.continueUp;
      this.operatorCurrentFloor.continueDown = floor.continueDown;
      this.operatorCurrentFloor.isTarget = floor.isTarget;      
    });
  }
}
