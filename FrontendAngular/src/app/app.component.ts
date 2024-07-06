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
  operatorCurrentFloor!: FloorComponent;


  constructor(private elevatorInfoService: ElevatorInfoService
  ){
    this.floors = new Array();
    this.elevator = new ElevatorComponent();

    this.elevatorInfoService.getInitialInfo().subscribe(data => {

      for (let i = 0; i < data.floors.length; i++) {
        let floor = new FloorComponent();
        floor.floorNumber = data.floors[i].floorNumber;
        floor.continueUp = data.floors[i].continueUp;
        floor.continueDown = data.floors[i].continueDown;
        floor.isTarget = data.floors[i].target;
        floor.isSummoned = data.floors[i].summoned;
        floor.isOperatorFloor = data.floors[i].operatorFloor;
        this.floors.push(floor);
        if (floor.isOperatorFloor) {
          this.operatorCurrentFloor = floor;
        }
      }

      this.elevator.movement = data.elevator.movement;
      this.elevator.isDoorOpen = data.elevator.doorOpen;
      this.elevator.peopleInside = data.elevator.peopleInside;
      this.elevator.currentFloor = data.elevator.currentFloor;
    });
  }

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.updateElevator();
  //   }, 10000); // Call increment() every 2 seconds
  // }

  changeOperatorFloor(floor: number): void {
    this.elevatorInfoService.changeOperatorFloor(floor).subscribe(floors => {
      console.log("SENDING:", this.operatorCurrentFloor.floorNumber)
      for (let i = 0; i < this.floors.length; i++) {
        this.floors[i].isOperatorFloor = floors[i].operatorFloor;
        if (this.floors[i].isOperatorFloor) {
          this.operatorCurrentFloor = this.floors[i];
        }
      }
      console.log(floors);
    });
  }
  

  // callElevator() : void {
  //   this.elevatorInfoService.callElevator(this.operatorCurrentFloor.floorNumber).subscribe(elev => {
  //     this.elevator.movement = elev.movement;
  //     this.elevator.isDoorOpen = elev.doorOpen;
  //     this.elevator.peopleInside = elev.peopleInside;
  //     this.elevator.currentFloor = elev.currentFloor;

  //     console.log(this.elevator);
  //     console.log(this.operatorCurrentFloor);
  //   });
  // }
}
