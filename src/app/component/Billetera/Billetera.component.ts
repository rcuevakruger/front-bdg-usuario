import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BilleteraService } from './Billetera.service';
import { ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-billetera',
  templateUrl: './Billetera.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [BilleteraService],
  styles: [`
    .dark-modal .modal-content {
      background-color: #009efb;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
  `]
})

export class BilleteraComponent implements OnInit {
 closeResult: string;

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  idBilletera = new FormControl('', Validators.required);
  propietario = new FormControl('', Validators.required);
  valorActual = new FormControl('', Validators.required);

  constructor(public serviceBilletera: BilleteraService, fb: FormBuilder,private modalService: NgbModal, private modalService2: NgbModal) {
    this.myForm = fb.group({
      idBilletera: this.idBilletera,
      propietario: this.propietario,
      valorActual: this.valorActual
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }
  
  open2(content) { 
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open(content) {
    this.modalService2.open(content, { windowClass: 'dark-modal' });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

/*   @ViewChild(DatatableComponent) table: DatatableComponent;
    constructor() {
        this.rows = data;
        this.temp = [...data];
        setTimeout(() => { this.loadingIndicator = false; }, 1500);                                   
    }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();



    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
    } */



  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceBilletera.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }


//campos dentro de form en modal


  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'com.kruger.millas.activos.Billetera',
      'idBilletera': this.idBilletera.value,
      'propietario': "\""+this.propietario.value+"\"",
      'valorActual': this.valorActual.value
    };

    this.myForm.setValue({
      'idBilletera': null,
      'propietario': null,
      'valorActual': null
    });

    return this.serviceBilletera.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'idBilletera': null,
        'propietario': null,
        'valorActual': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  // campos dentro de form en modal cuando se quiere hacer un update del activo


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'com.kruger.millas.activos.Billetera',
      'propietario': this.propietario.value,
      'valorActual': this.valorActual.value
    };

    return this.serviceBilletera.updateAsset(form.get('idBilletera').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


// campos dentro de form en modal cuando se quiere borrar un activo


  deleteAsset(): Promise<any> {

    return this.serviceBilletera.deleteAsset(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceBilletera.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'idBilletera': null,
        'propietario': null,
        'valorActual': null
      };

      if (result.idBilletera) {
        formObject.idBilletera = result.idBilletera;
      } else {
        formObject.idBilletera = null;
      }

      if (result.propietario) {
        formObject.propietario = result.propietario;
      } else {
        formObject.propietario = null;
      }

      if (result.valorActual) {
        formObject.valorActual = result.valorActual;
      } else {
        formObject.valorActual = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'idBilletera': null,
      'propietario': null,
      'valorActual': null
      });
  }

}
