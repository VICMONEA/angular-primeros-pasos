import { Component, NgModule } from '@angular/core';
import { DbzModule } from './dbz/dbz.module';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number =  10
  increaseBy (value:number):void{
    this.counter+=value;
  }
  reset ():void{
    this.counter=10;
  }
  /*decreaseBy ():void{
    this.counter-=1;
  }*/
}
