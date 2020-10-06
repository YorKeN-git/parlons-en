import { Injectable } from '@angular/core';
import { sha256 } from 'js-sha256';
import { Utilisateur } from '../modeles/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class CreationCompteService {

  utilisateur: Utilisateur;

  constructor() { }

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
    console.log(this.utilisateur);
    //TODO BACK END 
  }

  hashMotDePasse(mdp: string){
    var mdpCrypter: string = ""; 
    mdpCrypter = sha256(mdp);
    //console.log(mdpCrypter);
    return mdpCrypter
  }
}
