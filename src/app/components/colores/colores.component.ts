import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colores',
  standalone: false,
  templateUrl: './colores.component.html',
  styleUrl: './colores.component.scss'
})
export class ColoresComponent {

  @Output() colorSeleccionado = new EventEmitter<string>();

  colores = [

    {
      nombre: 'rojo',
      valor: 'red'
    },

    {
      nombre: 'azul',
      valor: 'blue'
    },

    {
      nombre: 'verde',
      valor: 'green'
    },

    {
      nombre: 'morado',
      valor: 'purple'

    }

  ]

  seleccionarColor(color: string) {

    this.colorSeleccionado.emit(color);

  }

}
