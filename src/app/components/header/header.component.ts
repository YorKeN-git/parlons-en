import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/modeles/utilisateur';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isConnecter: boolean = false;
  pseudo: string;
  utilisateur: Utilisateur;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('userConnecte')){
      this.isConnecter = true; 
      // this.utilisateur = new Utilisateur();
      let json = localStorage.getItem('userConnecte');
      let utilisateurJson = JSON.parse(json);
      this.pseudo = utilisateurJson.userName;
    }
  }

  deconnexionUtilisateur(){
    this.isConnecter = false;
    localStorage.removeItem('userConnecte');
  }

}
