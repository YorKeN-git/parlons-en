import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conference } from '../modeles/conference';

@Injectable({
  providedIn: 'root'
})
export class CreationConferenceService {
  url: string = "http://localhost:8080/conference/add";
  //Header option
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
  };
  
  constructor(private http: HttpClient) { }

  creerConference(conference: Conference){
    //console.log(conference);
    return this.http.post(this.url, conference, this.httpOptions);
  }
}
