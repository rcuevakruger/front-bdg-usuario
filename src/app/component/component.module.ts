import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
// import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { AppRoutingModule } from '.././app-routing.module';


import { ComponentsRoutes } from './component.routing';
import { BilleteraComponent } from "./Billetera/Billetera.component";
import { CobrarMillasComponent } from "./CobrarMillas/CobrarMillas.component";
import { AcreditarMillasComponent } from "./AcreditarMillas/AcreditarMillas.component";
import { CambiarMillasComponent } from "./CambiarMillas/CambiarMillas.component";
import { ClienteComponent } from "./Cliente/Cliente.component";
import { ComercioComponent } from "./Comercio/Comercio.component";
import { EmisorComponent } from "./Emisor/Emisor.component";
import { PropietarioComponent } from "./Propietario/Propietario.component";


@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonpModule,
    HttpModule,
    NgbModule,
    // AppRoutingModule
  ],
  declarations: [
    BilleteraComponent,
    CobrarMillasComponent,
    AcreditarMillasComponent,
    CambiarMillasComponent,
    ClienteComponent,
    ComercioComponent,
    EmisorComponent,
    PropietarioComponent,
  ],

})



export class ComponentsModule {}