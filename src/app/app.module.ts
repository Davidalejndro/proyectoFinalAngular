import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import { CardComponent } from './components/card/card.component';
import { StoreComponent } from './components/store/store.component';
import { PlataformaComponent } from './components/plataforma/plataforma.component';
import { ItemsComponent } from './components/items/items.component';
import { AppRoutingModule } from './app-routing-module';
import { AddarticuloComponent } from './components/addarticulo/addarticulo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditaccesorioComponent } from './components/editaccesorio/editaccesorio.component';
import { DetailaccesorioComponent } from './components/detailaccesorio/detailaccesorio.component';

// Import Modulo de autentificacion
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccesoriosComponent,
    CardComponent,
    StoreComponent,
    PlataformaComponent,
    ItemsComponent,
    AddarticuloComponent,
    EditaccesorioComponent,
    DetailaccesorioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-7rl-yt14.us.auth0.com',
      clientId: '8YNadETECnfmeJx8m1nXe4kxUiTmncXJ'
    }),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
