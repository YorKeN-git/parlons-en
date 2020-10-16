import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { ConnexionService } from 'src/app/services/connexion.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connexionForm: FormGroup;
  isValider: boolean = false;
  isErreurConnexion: boolean = false;
  utilisateurConnecte: Utilisateur;

  constructor(private formBuilder: FormBuilder, 
              private utilisateurService: ConnexionService,
              private router: Router,
              private headerComp: HeaderComponent) { }

  ngOnInit() {
    this.connexionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get verifierChamp() { return this.connexionForm.controls; }

  connexionUtilisateur(){
    this.isValider = true;
    if(this.connexionForm.valid){
      //Recuperd les données saisies 
      let email = this.connexionForm.get('email').value;
      let mdp = this.connexionForm.get('motdepasse').value;
      mdp = this.utilisateurService.sha256Mdp(mdp);
      //Vérifier la connexion
      this.utilisateurService.connexionUtilisateur(email, mdp).subscribe(
        (response) => {
          if(response != null){
            this.utilisateurConnecte = new Utilisateur();
            this.utilisateurConnecte = response ;
            if(mdp == this.utilisateurConnecte.mdp){
              //Concordance des mot de passe 
              console.log("Les mdp concordent !");
              this.isErreurConnexion = false;
              //enregistre en localstorage l'utilisateur 
              localStorage.setItem('userConnecte', JSON.stringify(this.utilisateurConnecte));
              //redirection vers la page d'acceuil
              this.router.navigate(['/acceuil']);
              this.headerComp.ngOnInit();
              //WIP get info user sur home 
            }else{
              console.log("Les mdp concordent pas !");
              this.afficherErreur();
            }
          }else{
            console.log("Adresse e-mail inconnu en BDD !");
            this.afficherErreur();
          }
          
        },
      (error) => {
        this.afficherErreur();
        //alert("Une erreur est survenue lors de la requête");
      }
    );
      
    }else{
      this.afficherErreur();
      return ;
    }
  }

  afficherErreur(){
    this.isErreurConnexion = true;
  }

  // verifierErreurConnexion(){
  //   this.isErreurConnexion = this.utilisateurService.getErreurConnexion();
  //   //console.log(this.isErreurConnexion);
  // }

}
