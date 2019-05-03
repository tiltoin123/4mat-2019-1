import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombustivelListComponent } from './combustivel/combustivel-list/combustivel-list.component';

const routes: Routes = [
  {
    path: 'combustivel',
    component: CombustivelListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
