import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';
// import { ChartistModule} from 'ng-chartist';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { BilleteraComponent } from "./dashboard-components/Billetera/Billetera.component";
import { CambiarMillasComponent } from "./dashboard-components/CambiarMillas/CambiarMillas.component";
import { CobrarMillasComponent } from "./dashboard-components/CobrarMillas/CobrarMillas.component";

@NgModule({
	imports: [
        FormsModule,
        ReactiveFormsModule,
    	CommonModule,
        NgbModule,
        ChartsModule,
        // ChartistModule,
        Ng2SmartTableModule,
    	RouterModule.forChild(DashboardRoutes)
    ],
	declarations: [
        Dashboard1Component,
        BilleteraComponent,
        CambiarMillasComponent,
        CobrarMillasComponent
    ]
})
export class DashboardModule { }