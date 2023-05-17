import { Component } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  buttonText: string = 'Acessar';
  buttonTexts: string[] = ['Vender', 'Comprar'];
  buttonNumber: number = 1;
  buttonObject = {
    label: 'Adicionar ao Carrinho.',
  };
}
