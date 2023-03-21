import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermconditionPageRoutingModule } from './termcondition-routing.module';

import { TermconditionPage } from './termcondition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermconditionPageRoutingModule
  ],
  declarations: [TermconditionPage]
})
export class TermconditionPageModule {}
