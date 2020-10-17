import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Conference } from 'src/app/modeles/conference';
import { CreationConferenceService } from 'src/app/services/creation-conference.service';

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
  listThemes: String[] = ['LifeStyle', 'Informatique', 'Ecologie', 'Humanitaire'];
  isErreurCreation :boolean = false;
  isCreationOk: boolean = false;
  constructor(private formBuilder: FormBuilder, private conferenceService : CreationConferenceService) { }

  ngOnInit() {
    this.creationConfForm = this.formBuilder.group(
      {
        titre: ['', Validators.required],
        description: [''],
        themeConf: ['', Validators.required],
        // urlImg: ['', Validators.required],
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
      let conference: Conference = new Conference();
      conference.titre = this.creationConfForm.get('titre').value;
      conference.description = this.creationConfForm.get('description').value;
      conference.dateConference = this.creationConfForm.get('debutConference').value;
      if(conference.dateConference == 'maintenant'){
        //Choix conférence imédiate 
        //Charge la date d'aujourd'hui et l'heure
        let dateToday = new Date(); 
        conference.dateConference = dateToday.toLocaleDateString();
        conference.heureConference = dateToday.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}); 
      }else{
        //Choix conférence différée
        conference.dateConference = this.creationConfForm.get('dateConference').value;
        conference.dateConference = this.creationConfForm.get('heureConference').value;
      }
      conference.createur = this.getCreateurConference();
      conference.urlImg = this.urlImg;
      conference.theme = this.creationConfForm.get('themeConf').value;
      this.conferenceService.creerConference(conference).subscribe(
        (response) => {
          if(response != null){
            //Creation ok de la conference
            this.isCreationOk = true;
            this.isErreurCreation = false;
            this.creationConfForm.reset();
            //TODO redirection vers la page conference
          }
        },
        (error) =>{
          //Une erreur c'est produite 
          if(error != null){
            this.isErreurCreation = true;
            this.isCreationOk = false;
          }
        }
      );
    }else{
      return;
      this.creationConfForm.reset();
    }
  }

  afficherImgTheme(value){
     
    switch (value) {
      case 'LifeStyle':
        this.urlImg = "./assets/theme/lifestyle.jpg";
        break;
      
      case 'Informatique':
        this.urlImg = "./assets/theme/informatique.jpg";
        break;
      
      case 'Humanitaire':
        this.urlImg = "./assets/theme/Humanitaire.jpg";
        break;
      
      case 'Ecologie':
        this.urlImg = "./assets/theme/ecologie.jpg";
        break;
      
      default:
        break;
    }
  }

  getCreateurConference(){
    let createur; 
    let json = localStorage.getItem('userConnecte');
    let utilisateurJson = JSON.parse(json);
    createur = utilisateurJson.userName;
    return createur;
  }
}
