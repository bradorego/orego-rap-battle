import {Injectable} from '@angular/core';


@Injectable()
export class MediaProvider {
  private _plays = [];
  private _media:HTMLAudioElement;


  playTrack(item: any) {
    console.log(item);
    this._media = new Audio();
    this._media.src = item.file;
    this._media.load();
    this._plays.push(this._media);
    this._media.play();
  }

  stopAll() {
    console.log('stopall');
    for (let i = 0; i < this._plays.length; i++) {
      this._plays[i].pause();
      this._plays[i].currentTime = 0;
    }
    this._plays = []; // clear array
  }
}
