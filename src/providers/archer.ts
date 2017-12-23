import { Injectable } from "@angular/core";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArcherData {
  private _items = [
    {
      'title': 'Ants',
      'desc': 'Oh is that what you want?!',
      'file': 'assets/sounds/ants.mp3'
    },
    {
      'title': 'Burned',
      'desc': '',
      'file': 'assets/sounds/burned.mp3'
    },
    {
      'title': 'Danger Zone!',
      'desc': 'Call Kenny Loggins',
      'file': 'assets/sounds/dangerzone.mp3'
    },
    {
      'title': 'Fort Kickass',
      'desc': '',
      'file': 'assets/sounds/fortkickass.mp3'
    },
    {
      'title': 'Hangover',
      'desc': '',
      'file': 'assets/sounds/hangover.mp3'
    },
    {
      'title': 'Jenga',
      'desc': 'Do you think this is a game?!',
      'file': 'assets/sounds/jenga.mp3'
    },
    {
      'title': 'Phrasing',
      'desc': '',
      'file': 'assets/sounds/phrasing.mp3'
    }
  ];
  getItems():Array<any> {
    return this._items;
  }
}

