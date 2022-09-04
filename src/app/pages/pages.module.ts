import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
   
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    AboutComponent

  ]
})
export class PagesModule { }
