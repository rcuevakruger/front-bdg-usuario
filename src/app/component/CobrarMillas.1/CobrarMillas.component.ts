/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CobrarMillasService } from './CobrarMillas.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/toPromise';
import { ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cobrarmillas',
  templateUrl: './CobrarMillas.component.html',
  providers: [CobrarMillasService],
})
export class CobrarMillasComponent implements OnInit {
  closeResult: string;

  myForm: FormGroup;
  
  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  billetera = new FormControl('', Validators.required);
  valorCobro = new FormControl('', Validators.required);
  referencia = new FormControl('', Validators.required);
  motivo = new FormControl('', Validators.required);
  transactionId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);


  constructor(private serviceCobrarMillas: CobrarMillasService, fb: FormBuilder,private modalService: NgbModal, private modalService2: NgbModal) {
    this.myForm = fb.group({
      billetera: this.billetera,
      valorCobro: this.valorCobro,
      referencia: this.referencia,
      motivo: this.motivo,
      transactionId: this.transactionId,
      // timestamp: this.timestamp
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

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceCobrarMillas.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(transaction => {
        tempList.push(transaction);
      });
      this.allTransactions = tempList;
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
   * @param {String} name - the name of the transaction field to update
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
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'com.kruger.millas.transacciones.CobrarMillas',
      'billetera': this.billetera.value,
      'valorCobro': this.valorCobro.value,
      'referencia': this.referencia.value,
      'motivo': this.motivo.value,
      'transactionId': this.transactionId.value,
      // 'timestamp': this.timestamp.value
    };

    this.myForm.setValue({
      'billetera': null,
      'valorCobro': null,
      'referencia': null,
      'motivo': null,
      'transactionId': null,
      // 'timestamp': null
    });

    return this.serviceCobrarMillas.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'billetera': null,
        'valorCobro': null,
        'referencia': null,
        'motivo': null,
        'transactionId': null,
        // 'timestamp': null
      });
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }

  updateTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'com.kruger.millas.transacciones.CobrarMillas',
      'billetera': this.billetera.value,
      'valorCobro': this.valorCobro.value,
      'referencia': this.referencia.value,
      'motivo': this.motivo.value,
      'timestamp': this.timestamp.value
    };

    return this.serviceCobrarMillas.updateTransaction(form.get('transactionId').value, this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
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

  deleteTransaction(): Promise<any> {

    return this.serviceCobrarMillas.deleteTransaction(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
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

    return this.serviceCobrarMillas.getTransaction(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'billetera': null,
        'valorCobro': null,
        'referencia': null,
        'motivo': null,
        'transactionId': null,
        'timestamp': null
      };

      if (result.billetera) {
        formObject.billetera = result.billetera;
      } else {
        formObject.billetera = null;
      }

      if (result.valorCobro) {
        formObject.valorCobro = result.valorCobro;
      } else {
        formObject.valorCobro = null;
      }

      if (result.referencia) {
        formObject.referencia = result.referencia;
      } else {
        formObject.referencia = null;
      }

      if (result.motivo) {
        formObject.motivo = result.motivo;
      } else {
        formObject.motivo = null;
      }

      if (result.transactionId) {
        formObject.transactionId = result.transactionId;
      } else {
        formObject.transactionId = null;
      }

      if (result.timestamp) {
        formObject.timestamp = result.timestamp;
      } else {
        formObject.timestamp = null;
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
      'billetera': null,
      'valorCobro': null,
      'referencia': null,
      'motivo': null,
      'transactionId': null,
      'timestamp': null
    });
  }
}
