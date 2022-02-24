import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttackCalculatorComponent } from './attack-calculator/attack-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AttackCalculatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CalcEngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
