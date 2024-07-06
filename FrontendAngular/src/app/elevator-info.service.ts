import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevatorInfoService {
  private infoUrl = 'http://localhost:8080/elevatorInfo';

  constructor(private http: HttpClient) { }

  getElevatorInfo(): Observable<any> {
    return this.http.get<any>(this.infoUrl);
  }
}
