import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { ArcherData } from '../../providers/archer';
import { MediaProvider } from '../../providers/media';

@Component({
  selector: 'page-archer',
  templateUrl: 'archer.html'
})
export class ArcherPage {
  data:any = [];

  constructor(
    public navCtrl: NavController,
    public provider: ArcherData,
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
