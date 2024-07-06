import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevatorInfoService {
  private elevatorInfoUrl = 'http://localhost:8080/elevatorInfo';
  private initialInfo = 'http://localhost:8080/initialInfo';

  constructor(private http: HttpClient) { }

  getElevatorInfo(): Observable<any> {
    return this.http.get<any>(this.elevatorInfoUrl);
  }

  getInitialInfo(): Observable<any> {
    return this.http.get<any>(this.initialInfo);
  }

}
