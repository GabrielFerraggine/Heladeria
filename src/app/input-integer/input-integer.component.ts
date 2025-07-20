import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  constructor() {}

  @Input() actualQuantity!: number;
  @Input() maxQuantity!: number;
  @Input() allowNegative: boolean = false;

  @Output() actualQuantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    
  }
  downWeightQuanty(): void {
    if (this.allowNegative || this.actualQuantity > 0) {
      this.actualQuantity--;
      this.actualQuantityChange.emit(this.actualQuantity);
    } else {
      this.maxReached.emit("No se puede reducir más.");
    }
}

  upWeightQuanty(): void {
    if(this.actualQuantity-this.maxQuantity < 0) {
      this.actualQuantity++;
      this.actualQuantityChange.emit(this.actualQuantity);
    } 
  }
  changeWeightQuantity(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);

    if (!isNaN(value) && (this.allowNegative || value >= 0)) {
      this.actualQuantity = value;
      this.actualQuantityChange.emit(this.actualQuantity);
    } else {
      this.maxReached.emit("Valor no permitido.");
    }
  }

}