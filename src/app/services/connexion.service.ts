import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sha256 } from 'js-sha256';
import { Utilisateur } from '../modeles/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  url: string = "http://localhost:8080/utilisateur/";
  //Header option
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
  };
  utilisateurConnecte: Utilisateur ; 
  erreurConnexion: boolean;

  constructor(private http: HttpClient, 
              private utilisateur: Utilisateur) { }

  connexionUtilisateur(email: string, mdp: string){
    return this.http.get<Utilisateur>(this.url + email, this.httpOptions);
  }

  sha256Mdp(mdp: any){
    return sha256(mdp);
  }

  // setErreurConnexion(erreurConexion: boolean){
  //   console.log("Je set erreur connexion à : " + erreurConexion);
  //   this.erreurConnexion = erreurConexion ; 
  // }

  // getErreurConnexion(){
  //   //console.log(this.erreurConnexion);
  //   return this.erreurConnexion;
  // }
}
