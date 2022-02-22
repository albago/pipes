import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre: string = 'AlejandrO';

  PI: number = Math.PI;

  per: number = 0.234;

  salario: number = 10500.65

  fecha: Date = new Date();

  persona = {
    nombre: 'Alex',
    edad: 39,
    ciudad: 'Guadalajara'
  }

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Terminó Promesa'), 3500);
  });

  activar: boolean = false;

  arrNum: number[] = [14300, 12322, 3443];

  videocod: string = 't0HNlwQRAnU';
}
