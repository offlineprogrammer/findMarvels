import { Component } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { CharacterResponse } from '../interfaces/character';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public isCharactersAvailable = false;
  public marvelCharacters: any;
  public character: CharacterResponse;


  constructor(private marvelService: MarvelService) {
    this.character = {
      id: null,
      name: null,
      description: null,
      modified: null,
      resourceURI: null,
      urls: null,
      thumbnail: null,
      comics: {
        available: 0,
        returned: 0,
        collectionURI: null,
        items: null,

      },
      stories: {
        available: 0,
        returned: 0,
        collectionURI: null,
        items: null,
      },
      events: {
        available: 0,
        returned: 0,
        collectionURI: null,
        items: null,
      },
      series: {
        available: 0,
        returned: 0,
        collectionURI: null,
        items: null,
      }
    };
  }

  async getCharacters(event) {
    if ( event.target.value ) {
      console.log('getCharacters', event.target.value);
      const characters = await this.marvelService.getCharacter(event.target.value);
      this.isCharactersAvailable = true;
      this.marvelCharacters = characters;
      console.log(characters);
    }

  }

  selectCharacter(item) {
    console.log(item);
    this.character = item;
    this.isCharactersAvailable = false;
  }


}
