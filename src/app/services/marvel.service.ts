import { Injectable } from '@angular/core';
import { CharacterResponse } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  public data: CharacterResponse;
  private apiKey = '';


  constructor() { }

  async getCharacter(input: string) {

    let response: Response;
    try {
      response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${input}&apikey=${this.apiKey}`);
      if (!response.ok) {
          throw new Error(response.statusText);
        }
    } catch (err) {
      console.log('Error ', err );
      return Promise.reject(err);
    }
    const placesData = await response.json();
    console.log(placesData);
    return this.processData(placesData.data.results);
  }

  processData (data: CharacterResponse) {
    return (this.data = data);
  }


}
