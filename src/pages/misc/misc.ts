import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MiscData } from '../../providers/misc';
import { MediaProvider } from '../../providers/media';


@Component({
  selector: 'page-misc',
  templateUrl: 'misc.html'
})
export class MiscPage {
  data:any = [];

  constructor(
    public navCtrl: NavController,
    public provider: MiscData,
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
