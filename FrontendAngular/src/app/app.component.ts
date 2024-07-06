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

  ngOnInit(): void {
    setInterval(() => {
      // this.elevatorTick();
    }, 10000); // Call increment() every 2 seconds
  }

  changeOperatorFloor(floor: number): void {
    this.elevatorInfoService.changeOperatorFloor(floor).subscribe(floors => {
      for (let i = 0; i < this.floors.length; i++) {
        this.floors[i].isOperatorFloor = floors[i].operatorFloor;
        if (this.floors[i].isOperatorFloor) {
          this.operatorCurrentFloor = this.floors[i];
        }
      }
      console.log(this.operatorCurrentFloor.floorNumber);
    });
  }
  

  callElevator(direction: number) : void {
    this.elevatorInfoService.callElevator(this.operatorCurrentFloor.floorNumber, direction).subscribe(data_floors => {
      for (let i = 0; i < this.floors.length; i++) {
        this.floors[i].isSummoned = data_floors[i].summoned;
        this.floors[i].continueUp = data_floors[i].continueUp;
        this.floors[i].continueDown = data_floors[i].continueDown;
      }
    });
  }

  elevatorTick() : void {
    this.elevatorInfoService.elevatorTick().subscribe(data => {
    });
  }
}
