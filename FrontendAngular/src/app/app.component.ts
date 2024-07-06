import { Component } from '@angular/core';
import { ElevatorInfoService } from './elevator-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendAngular';
  noFloors = 0;
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
    this.elevatorInfoService.getInitialInfo().subscribe(floors => {
      this.noFloors = floors.length;
      this.operatorCurrentFloor = floors[0].floorNumber;
      console.log(this.noFloors, this.operatorCurrentFloor);

    });
  }
}
