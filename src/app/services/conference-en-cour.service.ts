import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conference } from '../modeles/conference';

@Injectable({
  providedIn: 'root'
})
export class ConferenceEnCourService {
  url: string = "http://localhost:8080/conference/search";
  //Header option
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
  };
  
  constructor(private http: HttpClient) { }

  /**
   * Retourne toutes les conférences du jour 
   */
  getConferenceEnCour(){
    let dateToday = new Date();
    let jj = dateToday.getDate();
    let mm = dateToday.getMonth() + 1; 
    let aaaa = dateToday.getFullYear();
    let urlComplet = this.url + '/' + jj.toString() + '/' + mm.toString() + '/' + aaaa ;
    console.log(urlComplet);
    return this.http.get<Conference[]>(urlComplet , this.httpOptions ) ; 
  }
}
