import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { PipesModule } from '../pipes/pipes.module';
import { CalendarModule } from "ion2-calendar"
import { AgmCoreModule } from '@agm/core';

import { ionPropertyApp } from './app.component';

import { MessageService } from "../providers/message-service-mock";
import { PropertyService } from "../providers/property-service-mock";
import { BrokerService } from "../providers/broker-service-mock";
import { InvoiceService } from "../providers/invoice-service-mock";
import { ChatService } from "../providers/chat-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

var config = {
	apiKey: "AIzaSyCHdEEibwMTAeE7iPxWUieLFzzrHeKdflM",
	authDomain: "hivekeeper-9bcd7.firebaseapp.com",
	databaseURL: "https://hivekeeper-9bcd7.firebaseio.com",
	projectId: "hivekeeper-9bcd7",
	storageBucket: "hivekeeper-9bcd7.appspot.com",
	messagingSenderId: "604265744884"
};

@NgModule({
  declarations: [
		ionPropertyApp
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(ionPropertyApp, {
			preloadModules: true,
			scrollPadding: false,
			scrollAssist: true,
			autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionPropertyDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
		}),
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
		}),
		PipesModule,
		CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
		ionPropertyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    PropertyService,
    BrokerService,
    MessageService,
    InvoiceService,
    ChatService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
