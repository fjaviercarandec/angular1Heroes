import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() heroesArray;
  @Output() newFavHero = new EventEmitter<string>();

  favHero: string;

  constructor() { }

  ngOnInit(): void {}

  liked(hero): void {
    this.favHero = hero.nombre;
    this.newFavHero.emit(this.favHero);
  }

}
