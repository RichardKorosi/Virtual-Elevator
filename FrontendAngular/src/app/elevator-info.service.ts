import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevatorInfoService {
  private elevatorInfoUrl = 'http://localhost:8080/elevatorInfo';
  private initialInfoUrl = 'http://localhost:8080/initialInfo';
  private changeOperatorFloorUrl = 'http://localhost:8080/changeOperatorFloor';
  private callElevatorUrl = 'http://localhost:8080/callElevator';

  constructor(private http: HttpClient) { }

  getElevatorInfo(): Observable<any> {
    return this.http.get<any>(this.elevatorInfoUrl);
  }

  getInitialInfo(): Observable<any> {
    return this.http.get<any>(this.initialInfoUrl);
  }

  changeOperatorFloor(floor: number): Observable<any> {
    return this.http.get<any>(this.changeOperatorFloorUrl+"/"+floor);
  }

  callElevator(floor: number): Observable<any> {
    return this.http.get<any>(this.callElevatorUrl+"/"+floor);
  }
  


}
