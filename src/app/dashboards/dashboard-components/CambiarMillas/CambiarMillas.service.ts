import { Injectable } from '@angular/core';
import { DataService } from '../../../data.service';
import { Observable } from 'rxjs/Observable';
import { CambiarMillas } from '../../../com.kruger.millas.transacciones';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class CambiarMillasService {

  private NAMESPACE = 'CambiarMillas';

  constructor(private dataService: DataService<CambiarMillas>) {
  };

  public getAll(): Observable<CambiarMillas[]> {
      return this.dataService.getAll(this.NAMESPACE);
  }

  public getOne(id: any): Observable<CambiarMillas> {
    return this.dataService.getSingle(this.NAMESPACE,id);
  }

  public getTransaction(id: any): Observable<CambiarMillas> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addTransaction(itemToAdd: any): Observable<CambiarMillas> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateTransaction(id: any, itemToUpdate: any): Observable<CambiarMillas> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteTransaction(id: any): Observable<CambiarMillas> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

}

