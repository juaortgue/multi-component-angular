import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FatherComponent } from './firstExample/father/father.component';
import { SecondFatherComponent } from './secondExample/second-father/second-father.component';
import { ThirdFatherComponent } from './thirdExample/third-father/third-father.component';
import { FourthFatherComponent } from './fourthExample/fourth-father/fourth-father.component';
import { FithFatherComponent } from './fithExample/fith-father/fith-father.component';
import { SixthFatherComponent } from './sixthExample/sixth-father/sixth-father.component';
import { SeventhFatherComponent } from './seventhExample/seventh-father/seventh-father.component';

const routes: Routes = [
  { path: '', component: FatherComponent, pathMatch: 'full' },
  { path: 'secondExample', component: SecondFatherComponent },
  { path: 'thirdExample', component: ThirdFatherComponent },
  { path: 'fourthExample', component: FourthFatherComponent },
  { path: 'fithExample', component: FithFatherComponent },
  { path: 'sixthExample', component: SixthFatherComponent },
  { path: 'seventhExample', component: SeventhFatherComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
