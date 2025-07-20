import { Component, Input } from '@angular/core';
import { IceCream } from '../ice-cream-list/IceCream';
import { StockManagerService } from '../stock-manager.service';

@Component({
  selector: 'app-monetary-balance',
  standalone: false,
  templateUrl: './monetary-balance.component.html',
  styleUrl: './monetary-balance.component.scss'
})
export class MonetaryBalanceComponent {
  iceCreams: IceCream[] = [];
  totalBalance: number = 0;
  ice!: IceCream;

   constructor(private manager: StockManagerService) {
    
   }
  ngOnInit(): void {
    this.manager.managerList.subscribe(list => {
      this.iceCreams = list;
      this.calculateBalance();
    });
  }

  calculateBalance(): void {
    this.totalBalance = this.iceCreams.reduce((acc, ice) => {
      const unitProfit = ice.price_sale - ice.price_cost;
      return acc + (unitProfit * ice.weightQuantity);
    }, 0);
  }

  getClass(ice: IceCream | undefined): string {
    if (!ice) return '';
    const balance = (ice.price_sale - ice.price_cost) * ice.weightQuantity;
    return balance >= 0 ? 'text-green-600' : 'text-red-600';
  }
}
