import { Injectable } from "@angular/core";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RickMortyData {
  private _items = [
    {
      'title': 'Grapples',
      'desc': 'Crushed red party cups',
      'file': 'assets/sounds/15grapples.mp3'
    },
    {
      'title': 'I LIKE WHAT YOU GOT',
      'desc': 'GOOD JOB',
      'file': 'assets/sounds/ilike.mp3'
    },
    {
      'title': 'Lick My Balls',
      'desc': 'Haha, yeah! I say that all the time!',
      'file': 'assets/sounds/balls.mp3'
    },
    {
      'title': 'The News',
      'desc': '',
      'file': 'assets/sounds/news.mp3'
    },
    {
      'title': 'Rickdiculous',
      'desc': '',
      'file': 'assets/sounds/rickdiculous.mp3'
    },
    {
      'title': 'SHOW ME WHAT YOU GOT',
      'desc': 'I LIKE WHAT YOU GOT',
      'file': 'assets/sounds/showme.mp3'
    },
    {
      'title': 'Wubba Lubba Dub Dub!',
      'desc': 'I am in great pain. Please help me.',
      'file': 'assets/sounds/wubba.mp3'
    }
  ];
  getItems():Array<any> {
    return this._items;
  }
}
