import { Component } from '@angular/core';
import { MarvelService } from '../services/marvel.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public isCharactersAvailable = false;
  public marvelCharacters: any;


  constructor(private marvelService: MarvelService) {}

  async getCharacters(event) {
    console.log('getCharacters', event.target.value);
    const characters = await this.marvelService.getCharacter(event.target.value);
    this.isCharactersAvailable = true;
    this.marvelCharacters = characters;
    console.log(characters);
    
  }


}
