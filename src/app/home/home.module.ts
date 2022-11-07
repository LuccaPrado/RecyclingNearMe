import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { PlaceComponentModule } from '../place/place.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
