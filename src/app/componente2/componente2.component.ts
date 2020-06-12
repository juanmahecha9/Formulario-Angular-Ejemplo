import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss']
})
export class Componente2Component implements OnInit {

  data =  [];

  text1: string;
  recibirMensaje(mensaje: string) {
    this.text1 = mensaje;
    this.data[0]=mensaje
    console.log(mensaje)
  }

  text2: string;
  recibirMensaje1(mensaje: string) {
    this.text2 = mensaje;
    this.data[1]=mensaje
    console.log(mensaje)
  }

  text3: string;
  recibirMensaje2(mensaje: string) {
    this.text3 = mensaje;
    this.data[2]=mensaje
    console.log(mensaje)
  }

  text4: string;
  recibirMensaje3(mensaje: string) {
    this.text4 = mensaje;
    this.data[3]=mensaje
    console.log(mensaje)
  }

  text5: string;
  recibirMensaje4(mensaje: string) {
    this.text5 = mensaje;
    this.data[4]=mensaje
    console.log(mensaje)
  }

datos ={
  Nombre: this.data[0],
  Edad: this.data[1],
  Correo: this.data[2],
  Telefono: this.data[3],
  Ciudad: this.data[4]
}

isActive = false;
   
  mostrar(e){
    alert('Mostrar datos');
    this.isActive = true;
    }
  ocultar(e){
    alert('Ocultar datos');
    this.isActive = false;
  }  

  objetos(e){
    console.log(this.datos);
  }

  constructor() {
    console.log('Success Module 2...')
  }

  ngOnInit(): void {
  }

}
