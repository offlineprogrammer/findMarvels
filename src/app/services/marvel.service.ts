import { Injectable } from '@angular/core';
import { CharacterResponse } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  public data: CharacterResponse;
  private apiKey = '82744fdc803f1e31bcc6cbedcbe607c0';


  constructor() { }
}
