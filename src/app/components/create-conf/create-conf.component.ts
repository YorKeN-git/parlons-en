import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-conf',
  templateUrl: './create-conf.component.html',
  styleUrls: ['./create-conf.component.scss']
})
export class CreateConfComponent implements OnInit {
  isAfficherPgrConf: boolean = false; 
  creationConfForm: FormGroup;
  isValider: boolean = false; 
  urlImg: string; 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creationConfForm = this.formBuilder.group(
      {
        titre: ['', Validators.required],
        description: [''],
        urlImg: ['', Validators.required],
        debutConference:['', Validators.required],
        dateConference:[''],
        heureConference:['']
      }
    )
  }

  get verifierChamp() { return this.creationConfForm.controls; }

  afficherPrgConf(value){
    if(value == 'maintenant'){
      this.isAfficherPgrConf = false;
    }else{
      this.isAfficherPgrConf = true; 
    }
  }

  validerConf(){
    this.isValider = true;
    if(this.creationConfForm.valid){
      //recuperd les informations 
      let titre = this.creationConfForm.get('titre').value;
      let description = this.creationConfForm.get('description').value;
      //this.urlImg = this.creationConfForm.get('urlImg').value;
      console.log(this.urlImg);
      let debutConference = this.creationConfForm.get('debutConference').value;
      if(debutConference == 'maintenant'){
        //Choix conférence imédiate 
        //Charge la date d'aujourd'hui et l'heure
        let dateToday = new Date(); 
        let date = dateToday.toLocaleDateString();
        let heure = dateToday.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}); 
      }else{
        //Choix conférence différée
        let dateConf = this.creationConfForm.get('dateConference');
        let heureConf = this.creationConfForm.get('heureConference');
      }
    }else{
      return;
      this.creationConfForm.reset();
    }
  }

  afficherImgConf(event){
   
  }
}
