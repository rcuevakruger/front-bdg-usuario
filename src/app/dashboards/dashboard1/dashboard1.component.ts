import { Component, AfterViewInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
	templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component {
	subtitle:string;	
	constructor() {
		this.subtitle = "This is some text within a card block."
	}
}