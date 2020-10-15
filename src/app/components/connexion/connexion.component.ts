import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { ConnexionService } from 'src/app/services/connexion.service';

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
              private router: Router) { }

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
          this.utilisateurConnecte = new Utilisateur();
          this.utilisateurConnecte = response ;
          if(mdp == this.utilisateurConnecte.mdp){
            //Concordance des mot de passe 
            console.log("Les mdp concordent !");
            this.isErreurConnexion = false;
            localStorage.setItem('userConnecte', JSON.stringify(this.utilisateurConnecte));
            this.router.navigate(['/acceuil']);
            //WIP get info user sur home 
          }else{
            console.log("Les mdp concordent pas !");
            this.isErreurConnexion = true;
          }
        },
      (error) => {
        this.isErreurConnexion = true;
        //alert("Une erreur est survenue lors de la requête");
      }
    );
      
    }else{
      return ;
    }
  }

  // verifierErreurConnexion(){
  //   this.isErreurConnexion = this.utilisateurService.getErreurConnexion();
  //   //console.log(this.isErreurConnexion);
  // }

}
