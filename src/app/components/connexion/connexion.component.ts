import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private utilisateurService: ConnexionService) { }

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
      //console.log("Avant d'utiliser mon service "+ email + ' ' + mdp)
      this.utilisateurService.connexionUtilisateur(email, mdp);
      setTimeout(this.verifierErreurConnexion,3000);
      //console.log(this.isErreurConnexion);
    }else{
      return ;
    }
  }

  verifierErreurConnexion(){
    this.isErreurConnexion = this.utilisateurService.getErreurConnexion();
  }

}
