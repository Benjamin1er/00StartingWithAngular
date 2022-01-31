import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyFormComponent } from './my-form/my-form.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { MagicOvenComponent } from './magic-oven/magic-oven.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MonComposantComponent,
    UserProfileComponent,
    MenuComponent,
    SignUpComponent,
    MyFormComponent,
    KitchenComponent,
    MagicOvenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
