import { Component, OnInit, Signal } from '@angular/core';
import { StockManagerService } from '../stock-manager.service';
import { IceCream } from '../ice-cream-list/IceCream';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-stock-manager',
  standalone: false,
  templateUrl: './stock-manager.component.html',
  styleUrl: './stock-manager.component.scss'
})
export class StockManagerComponent implements OnInit {
  managerList: IceCream[] = [];
  ice_cream: Signal<IceCream[]>; 

  constructor(private man: StockManagerService) {
    this.ice_cream = toSignal(this.man.managerList, { initialValue: [] });
    //toSignal version reactiva del subscribe/desubcribe
  }

  ngOnInit(): void {
    this.man.clear();
    /*vacia la lista cada vez que vuelvo al home, 
    para evitar generar helados inexistentes para la db*/
  }

  updateStocks(): void {
    let lista = this.ice_cream();
    for (let i = 0; i < lista.length; i++) {
      this.man.pathIceCreamStock(lista[i]);
    }
    this.man.clear(); 

  }
}