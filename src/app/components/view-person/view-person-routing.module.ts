import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPersonComponent } from './view-person.component';


const routes: Routes = [
  { path: '', component: ViewPersonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPersonRoutingModule { }
