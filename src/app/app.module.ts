import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-od112laz.us.auth0.com',
      clientId: 'gh5T889l921a9vwcU3PshCG6Bzdefsnk'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
