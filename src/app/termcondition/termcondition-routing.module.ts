import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermconditionPage } from './termcondition.page';

const routes: Routes = [
  {
    path: '',
    component: TermconditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermconditionPageRoutingModule {}
