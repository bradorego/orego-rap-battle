import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RickMortyPage } from '../pages/rickmorty/rickmorty';
import { MiscPage } from '../pages/misc/misc';
import { ArcherPage } from '../pages/archer/archer';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RickMortyData } from '../providers/rickandmorty';
import { MiscData } from '../providers/misc';
import { ArcherData } from '../providers/archer';
import { MediaProvider} from '../providers/media';

@NgModule({
  declarations: [
    MyApp,
    RickMortyPage,
    MiscPage,
    ArcherPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MiscPage,
    RickMortyPage,
    ArcherPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RickMortyData,
    MiscData,
    ArcherData,
    MediaProvider
  ]
})
export class AppModule {}
