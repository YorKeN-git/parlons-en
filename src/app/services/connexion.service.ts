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
    //WIP
    let erreur: boolean; 
    mdp = sha256(mdp);
    //console.log(email + ' ' + mdp);
    //console.log("Je vais contacter la BDD ");
    this.http.get(this.url + email, this.httpOptions)
      .subscribe(
      (response) => {
        this.utilisateurConnecte = response as Utilisateur;
        console.log(this.utilisateurConnecte);
        if(mdp == this.utilisateur.mdp){
          //mdp ok
          console.log("Les mdp concordent !");
          erreur = false;
          //return;
        }else{
          console.log("Les mdp concordent pas !");
          erreur = true;
          //return;
        }
      },
      (error) => {
        erreur = true;
        //return;
        //alert("Une erreur est survenue lors de la requête");
      },
      () => {
        //complete
        this.erreurConnexion = erreur;
        console.log("Dans mon service erreurConnexion =" + this.erreurConnexion);
        return;
      }
    );
    //console.log(erreur);
    //return erreur;
  }

  getErreurConnexion(){
    console.log(this.erreurConnexion);
    return this.erreurConnexion;
  }
}
