import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationCompteComponent } from './pages/creation-compte/creation-compte.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: 'acceuil', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'Creation-Compte', component: CreationCompteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
