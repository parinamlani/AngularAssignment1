import { Injectable } from '@angular/core';
import { employee } from './employee.module';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) {}
    postUserSettingsForm(employee : employee) : Observable<any>
    {
      return this.http.post('https://putsreq.com/SQt3FwaUBKXR55suKa6c',employee);

      // return of(employee);

   }
}
