import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sha256 } from 'js-sha256';
import { Utilisateur } from '../modeles/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  url: string = "localhost:8080/utilisateur/";
  constructor(private http: HttpClient, private utilisateur: Utilisateur) { }

  connexionUtilisateur(email: string, mdp: string){
    //WIP
    console.log("email + ' ' + mdp");
    // mdp = sha256(mdp);
    // console.log(email + ' ' + mdp);
    // console.log("Je vais contacter la BDD ");
    // this.http.get(this.url + email)
    //   .subscribe(
    //   (response) => {
    //     this.utilisateur = response as Utilisateur;
    //   },
    //   () => {
    //     alert("Une erreur est survenue lors de la requête");
    //   }
    // );

  }
}
