import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevatorInfoService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // TODO:
  elevatorTick(): Observable<any> {
    return this.http.get<any>(this.baseURL + '/elevatorTick');
  }

  // GET INFOS

  getElevatorInfo(): Observable<any> {
    return this.http.get<any>(this.baseURL + '/elevatorInfo');
  }

  getInitialInfo(): Observable<any> {
    return this.http.get<any>(this.baseURL + '/initialInfo');
  }

// WORKING WITH ELEVATOR

  changeOperatorFloor(floor: number): Observable<any> {
    return this.http.get<any>(this.baseURL+"/changeOperatorFloor/"+floor);
  }

  callElevator(floor: number, direction: number): Observable<any> {
    return this.http.get<any>(this.baseURL+"/callElevator/"+floor+"/"+direction);
  }

  enterElevator(): Observable<any> {
    return this.http.get<any>(this.baseURL+"/enterElevator");
  }

  exitElevator(): Observable<any> {
    return this.http.get<any>(this.baseURL+"/exitElevator");
  }

  openDoor(): Observable<any> {
    return this.http.get<any>(this.baseURL+"/openDoor");
  }

  closeDoor(): Observable<any> {
    return this.http.get<any>(this.baseURL+"/closeDoor");
  }
  


}
