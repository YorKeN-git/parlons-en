import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConferenceALaUneComponent } from './components/conference-ala-une/conference-ala-une.component';
import { HomeComponent } from './pages/home/home.component';
import { ConferenceAVenirComponent } from './components/conference-avenir/conference-avenir.component';
import { CreationCompteComponent } from './pages/creation-compte/creation-compte.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { CreateConfComponent } from './components/create-conf/create-conf.component';
import { HttpClientModule } from '@angular/common/http';
import { Utilisateur } from './modeles/utilisateur';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConferenceALaUneComponent,
    HomeComponent,
    ConferenceAVenirComponent,
    CreationCompteComponent,
    ConnexionComponent,
    CreateConfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    Utilisateur
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
