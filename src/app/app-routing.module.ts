import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { CreateConfComponent } from './components/create-conf/create-conf.component';
import { CreationCompteComponent } from './pages/creation-compte/creation-compte.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: 'acceuil', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'Creation-Compte', component: CreationCompteComponent},
  {path: 'Creation-Conference', component: CreateConfComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
