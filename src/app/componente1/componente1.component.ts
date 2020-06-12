import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit {
@Output()
enviar: EventEmitter<string> =  new EventEmitter<string>();
@Output()
enviar1: EventEmitter<string> =  new EventEmitter<string>();
@Output()
enviar2: EventEmitter<string> =  new EventEmitter<string>();
@Output()
enviar3: EventEmitter<string> =  new EventEmitter<string>();
@Output()
enviar4: EventEmitter<string> =  new EventEmitter<string>();


texto: string;
texto1: string;
texto2: string;
texto3: string;
texto4: string;


btnEnviar(){
  this.enviar.emit(this.texto);
  this.enviar1.emit(this.texto1);
  this.enviar2.emit(this.texto2);
  this.enviar3.emit(this.texto3);
  this.enviar4.emit(this.texto4);
}


  constructor() {
    console.log('Success Module 1...')
  
   }

  ngOnInit(): void {
  }

}
