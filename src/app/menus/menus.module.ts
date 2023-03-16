import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenusPage } from './menus.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MenusPageRoutingModule } from './menus-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MenusPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [MenusPage],
})
export class MenusPageModule {}
