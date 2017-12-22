import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RickMortyData } from '../../providers/rickandmorty';
import { MediaProvider } from '../../providers/media';


@Component({
  selector: 'page-rickmorty',
  templateUrl: 'rickmorty.html'
})
export class RickMortyPage {
  data:any = [];

  constructor(
    public navCtrl: NavController,
    public provider: RickMortyData,
    public media: MediaProvider
  ) {
    this.data = this.provider.getItems();
  }

  playTrack (item: any) {
    this.media.playTrack(item);
  }

  stopAll () {
    this.media.stopAll();
  }
}
