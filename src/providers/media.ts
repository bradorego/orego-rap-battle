import {Injectable} from '@angular/core';

@Injectable()
export class MediaProvider {
  private _plays = [];
  private _media:HTMLAudioElement;


  playTrack(item: any) {
    this._media = new Audio();
    let file = item.file.slice();
    if (item.title === "Phrasing" ||
        item.title === "Danger Zone!" ||
        item.title === "Wubba Lubba Dub Dub!") {
      if ((Math.round(Math.random() * 10) % 4) === 0) { /// sometimes play the other one
        file = file.slice(0,-4) + "2" + file.slice(-4);
      }
    }
    if (item.title === "Grapples") { /// 3 options gasP
      if ((Math.round(Math.random() * 10) % 4) < 2) { /// sometimes play the other one
        file = file.slice(0,-4) + "2" + file.slice(-4);
      } else if ((Math.round(Math.random() * 10) % 4) < 2) { /// sometimes play the other one
        file = file.slice(0,-4) + "3" + file.slice(-4);
      } else {
        file = file;
      }
    }
    // this._media.src = item.file;
    this._media.src = file;
    this._media.load();
    this._plays.push(this._media);
    let playPromise = this._media.play();
    // In browsers that don’t yet support this functionality,
    // playPromise won’t be defined.
    if (playPromise !== undefined) {
      playPromise.then(function() {
        // Automatic playback started!
      }).catch(function(error) {
        // Automatic playback failed.
        // Show a UI element to let the user manually start playback.
      });
    }
  }

  stopAll() {
    for (let i = 0; i < this._plays.length; i++) {
      this._plays[i].pause();
      this._plays[i].currentTime = 0;
    }
    this._plays = []; // clear array
  }
}
