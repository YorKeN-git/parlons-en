import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sha256 } from 'js-sha256';
import { Utilisateur } from '../modeles/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class CreationCompteService {

  utilisateur: Utilisateur;
  url: string = "http://localhost:8080/utilisateur/";
  //Header option
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
  };
  emailExistant: boolean; 
  
  constructor(private http: HttpClient) { }

  /*
   * 
   * @param nom : 
   * @param prenom 
   * @param userName 
   * @param email 
   * @param mdp 
   * 
   * transmet au BACK notre utilisateur pour l'enregistrement en BDD (WIP)
   */
  crerCompteUtilisateur(nom: string, prenom: string, userName: string, email: string, mdp: string){
    mdp = this.hashMotDePasse(mdp);
    this.utilisateur = new Utilisateur();
    this.utilisateur.nom = nom;
    this.utilisateur.prenom = prenom;
    this.utilisateur.userName = userName;
    this.utilisateur.email = email;
    this.utilisateur.mdp = mdp;
    //console.log(this.utilisateur);
    return this.http.post<Utilisateur>(this.url, this.utilisateur, this.httpOptions);

  }

  hashMotDePasse(mdp: string){
    var mdpCrypter: string = ""; 
    mdpCrypter = sha256(mdp);
    //console.log(mdpCrypter);
    return mdpCrypter
  }

  verifierEmailExistant(email: String){
    return this.http.get<Utilisateur>(this.url + email, this.httpOptions);
  }
}
