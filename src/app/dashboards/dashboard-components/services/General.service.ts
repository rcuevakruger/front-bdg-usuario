/*
 * Licensed under the Apache License, Version 2.0 (the "License");[routerLink]="['/dashboard/dashboard1']"
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

import { Injectable } from '@angular/core';
import { DataService } from '../../../data.service';
import { Observable } from 'rxjs/Observable';
import { CobrarMillas } from '../../../com.kruger.millas.transacciones';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class GeneralService {

  private NAMESPACE_COMERCIO = 'Comercio';

  constructor(private dataService: DataService<any>) {
  };

 
  public login(id: any): Observable<any> {
    return this.dataService.getSingle(this.NAMESPACE_COMERCIO, id);
  }



}

