import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public heroName: string  = 'ironman';
  public heroAge: number = 45;

  get capitalizedName(): string {
    return this.heroName.toUpperCase();
  }

  getHeroDescription():string {
   return `${this.heroName} - ${this.heroAge}`;
  }

  changeName():void {
    this.heroName = 'Spiderman';
  }

  changeAge():void {
    this.heroAge=25;
  }

  initialHero():boolean {
    return (this.heroName!== 'Spiderman');
  }

  resetForm():void {
    //this.name = 'ironman';
    this.heroAge=45;
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    });
  }

}
