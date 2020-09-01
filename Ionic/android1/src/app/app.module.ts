import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';   // Native ：文字转语音
import { CallNumber } from '@ionic-native/call-number/ngx';   // Native ：拨号
import { BatteryStatus } from '@ionic-native/battery-status/ngx';//Native ：电量


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,//文字转语音
    CallNumber,//拨号
    BatteryStatus,//电量
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
