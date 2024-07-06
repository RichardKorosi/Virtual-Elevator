import { Component } from '@angular/core';
import { ElevatorInfoService } from './elevator-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontendAngular';

  constructor(private elevatorInfoService: ElevatorInfoService
  ){}

  getElevatorInfo(): void {
    this.elevatorInfoService.getElevatorInfo().subscribe(data => {
      console.log(data);
    });
  }
}
