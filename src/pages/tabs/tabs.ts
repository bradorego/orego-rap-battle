import { Component } from '@angular/core';

import { MiscPage } from '../misc/misc';
import { RickMortyPage } from '../rickmorty/rickmorty';
import { ArcherPage } from '../archer/archer';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ArcherPage;
  tab2Root = MiscPage;
  tab3Root = RickMortyPage;

  constructor() {

  }
}
