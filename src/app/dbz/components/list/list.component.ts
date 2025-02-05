import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
public characterList  : Character[] = [{
  name: 'Trunks',
  power: 10
}]

@Output()
public onDelete: EventEmitter <string> = new EventEmitter();

/*@Output()
public onDeleteById: EventEmitter <string> = new EventEmitter();*/

deleteCharacterById(id?:string):void {
  //deleteCharacterById(id:string):void {
  //ToDO Emitir el ID del personaje
  //console.log({index});
  //this.onDelete.emit(index);
  if (!id) return;
  this.onDelete.emit(id);

}


}
