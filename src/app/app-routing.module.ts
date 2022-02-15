import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttackCalculatorComponent } from './attack-calculator/attack-calculator.component';

const routes: Routes = [
  {path: 'calc', component: AttackCalculatorComponent},
  {path: '**', redirectTo: '/calc'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
