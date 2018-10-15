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
import { NgbdpregressbarBasic } from './progressbar/progressbar.component';
import { NgbdpaginationBasic } from './pagination/pagination.component';
import { NgbdAccordionBasic } from './accordion/accordion.component';
import { NgbdAlertBasic } from './alert/alert.component';
import { NgbdCarouselBasic } from './carousel/carousel.component';
import { NgbdDatepickerBasic } from './datepicker/datepicker.component';
import { NgbdDropdownBasic } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasic } from './modal/modal.component';
import { NgbdPopTooltip } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasic } from './rating/rating.component';
import { NgbdtabsBasic } from './tabs/tabs.component';
import { NgbdtimepickerBasic } from './timepicker/timepicker.component';
import { NgbdtypeheadBasic } from './typehead/typehead.component';
import { CardsComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
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
    NgbdpregressbarBasic,
    NgbdpaginationBasic,
    NgbdAccordionBasic,
    NgbdAlertBasic,
    NgbdCarouselBasic,
    NgbdDatepickerBasic,
    NgbdDropdownBasic,
    NgbdModalBasic,
    NgbdPopTooltip,
    NgbdratingBasic,
    NgbdtabsBasic,
    NgbdtimepickerBasic,
    NgbdtypeheadBasic,
    CardsComponent,
    ButtonsComponent,
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