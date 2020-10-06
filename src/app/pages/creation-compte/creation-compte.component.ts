import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.scss']
})
export class CreationCompteComponent implements OnInit {
  creationCompteForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creationCompteForm = this.formBuilder.group({
      validationPrenom: ['', Validators.required],
      validationNom: ['', Validators.required],
      validationUsername: ['', Validators.required],
      validationEmail: ['', [Validators.required, Validators.email]],
      validationMdp: ['', [Validators.required, Validators.minLength(6)]],
      validationMdpConfirmer: ['', Validators.required]
    }, {
      //validator: MustMatch('password', 'confirmPassword')
  });
  }

}
