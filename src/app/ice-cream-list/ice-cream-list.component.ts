import { Component } from '@angular/core';
import { IceCream } from './IceCream';
import { StockManagerService } from '../stock-manager.service';
import { IceCreamDataService } from '../ice-cream-data.service';

@Component({
  selector: 'app-ice-cream-list',
  standalone: false,
  templateUrl: './ice-cream-list.component.html',
  styleUrl: './ice-cream-list.component.scss'
})
export class IceCreamListComponent {

  ice_cream: IceCream[] = [];

  constructor(private man: StockManagerService, private iceDataService: IceCreamDataService) {}

  //se dispara al tener el componente en pantalla
  ngOnInit(): void {
    this.getIceCreamList();
  }
  
  addToManager(ice_cream: IceCream): void {
    if(ice_cream.weightQuantity!=0) {
      this.man.addToManager(ice_cream, ice_cream.weightQuantity);
      ice_cream.weightStock -= ice_cream.weightQuantity;
      ice_cream.weightQuantity = 0;
    } 
  }

  getIceCreamList() : void {
    this.iceDataService.get()
    .subscribe(ice => this.ice_cream = ice);
  }

  discontinueIceCream(id: number) {
    this.iceDataService.delete(id).subscribe();
    this.getIceCreamList();
  }
}