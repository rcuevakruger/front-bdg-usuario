import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
	subtitle:string;	
	constructor() {
		this.subtitle = "Portal para manejo de millas del Banco de Guayaquil"
	}

	ngAfterViewInit(){}
}