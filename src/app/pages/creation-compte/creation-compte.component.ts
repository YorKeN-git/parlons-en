import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreationCompteService } from 'src/app/services/creation-compte.service';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.scss']
})
export class CreationCompteComponent implements OnInit {
  creationCompteForm: FormGroup;
  isValider: boolean = false;
  
  constructor(private formBuilder: FormBuilder,private creationCompteService: CreationCompteService) { }

  ngOnInit() {
    this.creationCompteForm = this.formBuilder.group({
      validationPrenom: ['', Validators.required],
      validationNom: ['', Validators.required],
      validationUsername: ['', Validators.required],
      validationEmail: ['', [Validators.required, Validators.email]],
      validationMdp: ['', [Validators.required, Validators.minLength(6)]],
      validationMdpConfirmer: ['', Validators.required],
      accepterTerm: [false, Validators.requiredTrue]
    }, {
      validator: this.concordanceMdp('validationMdp', 'validationMdpConfirmer')
  });
  }

  get verifierChamp() { return this.creationCompteForm.controls; }

  concordanceMdp(mdp: string, mdpConfirmer: string){
    return (creationCompteForm: FormGroup) => {
      const control = creationCompteForm.controls[mdp];
      const matchingControl = creationCompteForm.controls[mdpConfirmer];

      if (matchingControl.errors && !matchingControl.errors.concordanceMdp) {
          // Si on trouve une erreur quelconque 
          return;
      }

      // Si non concordance des mdp
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ concordanceMdp: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
  }

  creerCompte(){
    this.isValider = true;
    if(this.creationCompteForm.valid){
      console.log("form valide");
      //recuperd les informations du formulaire 
      let nom = this.creationCompteForm.get('validationNom').value;
      let prenom = this.creationCompteForm.get('validationPrenom').value;
      let userName = this.creationCompteForm.get('validationUsername').value;
      let email = this.creationCompteForm.get('validationEmail').value;
      let mdp = this.creationCompteForm.get('validationMdp').value;
      this.creationCompteService.crerCompteUtilisateur(nom, prenom, userName, email, mdp);
    }else{
      return;
    }
  }


}
