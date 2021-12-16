import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  getCredentials() {
    return [
      {
        username:'arun',
        password: 'arun123'
      },
      {
        username:'abhi',
        password: 'abhi123'
      },
      {
        username:'arjun',
        password: 'arjun123'
      },
      {
        username:'vijay',
        password: 'vijay123'
      }
    ];
  }
}

