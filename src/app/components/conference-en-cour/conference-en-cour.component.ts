import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Conference } from 'src/app/modeles/conference';
import { ConferenceEnCourService } from 'src/app/services/conference-en-cour.service';

@Component({
  selector: 'app-conference-en-cour',
  templateUrl: './conference-en-cour.component.html',
  styleUrls: ['./conference-en-cour.component.scss']
})
export class ConferenceEnCourComponent implements OnInit {

  isPasDeConferenceEnCours = false; 
  isErreurConferenceEnCours = false; 
  listConference: Conference[] = new Array<Conference>();
  constructor(private conferenceEnCourService: ConferenceEnCourService) { }

  ngOnInit() {

    //Recuperd les conférences du jour 
    this.conferenceEnCourService.getConferenceEnCour().subscribe(
      (response) => {
        if(response != null){
          console.log(response);
          for (let index = 0; index < response.length; index++) {
            this.listConference[index] = response[index];
          }
        }else{
          this.isPasDeConferenceEnCours = true; 
        }

      },
      (error) => {
        //Erreur lors de la récupération des conférences en cours 
        this.isErreurConferenceEnCours = true; 
        this.isPasDeConferenceEnCours = false; 
      }
    );
  }

  rejoindre(value){
    
  }

}
