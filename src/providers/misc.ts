import { Injectable } from "@angular/core";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MiscData {
  private _items = [
    {
      'title': 'And His Name is...',
      'desc': 'JOHN CENA',
      'file': '/assets/sounds/cena.mp3'
    },
    {
      'title': 'Cock & Fire',
      'desc': 'Gun cock + Shotgun',
      'file': '/assets/sounds/cock-and-fire.mp3'
    },
    {
      'title': 'Ha ha!',
      'desc': '',
      'file': '/assets/sounds/nelson.mp3'
    },
    {
      'title': 'Horn',
      'desc': 'Rap battle airhorn',
      'file': '/assets/sounds/horn.mp3'
    },
    {
      'title': 'The Price Is Wrong',
      'desc': '',
      'file': '/assets/sounds/price-is-right.mp3'
    },
    {
      'title': 'Sad Trombone :(',
      'desc': 'womp womp',
      'file': '/assets/sounds/trombone.mp3'
    },
    {
      'title': 'Shotgun',
      'desc': 'just the shotgun',
      'file': '/assets/sounds/shotgun.mp3'
    },
    {
      'title': 'Who\'s That Pokemon?!',
      'desc': 'It\'s Pikachu!',
      'file': '/assets/sounds/pokemon.mp3'
    },
    {
      'title': 'Zelda Item Catch',
      'desc': '#winning',
      'file': '/assets/sounds/zelda.mp3'
    }
  ];
  getItems():Array<any> {
    return this._items;
  }
}


