import { Injectable } from '@angular/core';
import { IceCream } from './ice-cream-list/IceCream';
import { BehaviorSubject, Observable } from 'rxjs';
import { IceCreamDataService } from './ice-cream-data.service';


/*
*
*maneja la logica del manager de la heladeria 
*
*/
@Injectable({
  providedIn: 'root'
})
export class StockManagerService {

  private _managerList: IceCream[] = [];//estandar para poder encapsular la variable
  managerList: BehaviorSubject<IceCream[]> = new BehaviorSubject(this._managerList);

  constructor(private ice: IceCreamDataService) { }

  addToManager(ice_cream: IceCream, quantity: number): void {
    let item = this._managerList.find(v1 => v1.id === ice_cream.id);

    if (!item) {
      // Se clona el helado y se inicializa weightQuantity
      let newItem: IceCream = { ...ice_cream, weightQuantity: quantity };
      this._managerList.push(newItem);
    } else {
      item.weightQuantity += quantity;
    }

    // Emite una copia para asegurar la detección de cambios
    this.managerList.next([...this._managerList]);
  }

  clear(): void {
    this._managerList = [];
    this.managerList.next([]);
  }

  pathIceCreamStock(i: IceCream): void {
    if (i.id) {
      this.ice.getById(i.id).subscribe({
        next: (lastStock: IceCream) => {
          let newStock = lastStock.weightStock - i.weightQuantity;
          this.ice.pathStock(i.id!, newStock).subscribe();
        }
      });
      
    }
  }

}


