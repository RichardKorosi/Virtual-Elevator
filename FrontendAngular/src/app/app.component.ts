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
  view : number;


  constructor(private elevatorInfoService: ElevatorInfoService
  ){
    this.floors = new Array();
    this.elevator = new ElevatorComponent();
    this.view = 0;

    this.elevatorInfoService.getInitialInfo().subscribe(data => {

      for (let i = 0; i < data.floors.length; i++) {
        let floor = new FloorComponent();
        floor.floorNumber = data.floors[i].floorNumber;
        floor.continueUp = data.floors[i].continueUp;
        floor.continueDown = data.floors[i].continueDown;
        floor.isTarget = data.floors[i].target;
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
      this.elevatorTick();
    }, 2000);
  }

  elevatorTick() : void {
    this.elevatorInfoService.elevatorTick().subscribe(data => {
      for (let i = 0; i < data.floors.length; i++) {
        this.floors[i].floorNumber = data.floors[i].floorNumber;
        this.floors[i].continueUp = data.floors[i].continueUp;
        this.floors[i].continueDown = data.floors[i].continueDown;
        this.floors[i].isTarget = data.floors[i].target;
        this.floors[i].isOperatorFloor = data.floors[i].operatorFloor;
      }

      this.elevator.movement = data.elevator.movement;
      this.elevator.isDoorOpen = data.elevator.doorOpen;
      this.elevator.peopleInside = data.elevator.peopleInside;
      this.elevator.currentFloor = data.elevator.currentFloor;
    });
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
        this.floors[i].continueUp = data_floors[i].continueUp;
        this.floors[i].continueDown = data_floors[i].continueDown;
      }
    });
  }

  enterElevator() : void {
    this.elevatorInfoService.enterElevator().subscribe(data_floors => {
      for (let i = 0; i < this.floors.length; i++) {
        this.floors[i].isOperatorFloor = data_floors[i].operatorFloor;
      }
    }
    );
    this.view = 1;
  }

  exitElevator() : void {
    this.elevatorInfoService.exitElevator().subscribe();
    location.reload();    
  }

  openDoor() : void {
    this.elevatorInfoService.openDoor().subscribe(elev => {
      this.elevator.isDoorOpen = elev.doorOpen;
    }
    );
  }

  closeDoor() : void {
    this.elevatorInfoService.closeDoor().subscribe(elev => {
      this.elevator.isDoorOpen = elev.doorOpen;
    }
    );
  }

  chooseTarget(floor: number) : void {
    this.elevatorInfoService.chooseTarget(floor).subscribe(data_floors => {
      for (let i = 0; i < this.floors.length; i++) {
        this.floors[i].isTarget = data_floors[i].target;
      }
    });
  }


}
