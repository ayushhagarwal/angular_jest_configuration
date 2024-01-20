import { Component } from '@angular/core';

@Component({
  selector: 'app-sum-numbers',
  standalone: true,
  imports: [],
  templateUrl: './sum-numbers.component.html',
  styleUrl: './sum-numbers.component.scss'
})
export class SumNumbersComponent {
  addTwoNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}
