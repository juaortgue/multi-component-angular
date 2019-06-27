import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponent } from './firstExample/father/father.component';
import { ChildComponent } from './firstExample/child/child.component';
import { SecondFatherComponent } from './secondExample/second-father/second-father.component';
import { SecondChildComponent } from './secondExample/second-child/second-child.component';
import { ThirdFatherComponent } from './thirdExample/third-father/third-father.component';
import { ThirdChildComponent } from './thirdExample/third-child/third-child.component';
import { FourthFatherComponent } from './fourthExample/fourth-father/fourth-father.component';
import { FourthChildComponent } from './fourthExample/fourth-child/fourth-child.component';
import { FithChildComponent } from './fithExample/fith-child/fith-child.component';
import { FithFatherComponent } from './fithExample/fith-father/fith-father.component';
import { SixthFatherComponent } from './sixthExample/sixth-father/sixth-father.component';
import { SixthChildComponent } from './sixthExample/sixth-child/sixth-child.component';
import { SeventhChildComponent } from './seventhExample/seventh-child/seventh-child.component';
import { SeventhFatherComponent } from './seventhExample/seventh-father/seventh-father.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    ChildComponent,
    SecondFatherComponent,
    SecondChildComponent,
    ThirdFatherComponent,
    ThirdChildComponent,
    FourthFatherComponent,
    FourthChildComponent,
    FithChildComponent,
    FithFatherComponent,
    SixthFatherComponent,
    SixthChildComponent,
    SeventhChildComponent,
    SeventhFatherComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
