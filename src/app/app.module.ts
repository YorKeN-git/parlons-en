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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConferenceALaUneComponent,
    HomeComponent,
    ConferenceAVenirComponent,
    CreationCompteComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
