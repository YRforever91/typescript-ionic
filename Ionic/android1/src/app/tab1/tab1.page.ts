import { Component } from '@angular/core';

import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';   // Native ：文字转语音

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public convertText:string
  public speed:number = 0.5

  constructor(private tts: TextToSpeech) {

    this.tts = tts;
  }

   /**
   * 转换文字为语言
   */
  onConvert(){



    if(this.convertText !=null  &&  this.convertText.trim().length!=0){
      this.tts.speak({text:this.convertText,locale:'zh-CN',rate:this.speed})
      .then(() => {
        console.log('Speak Success')
      })
      .catch((reason: any) => console.log(reason));
      return;
    }
  
  }

  onStop(){


      //this.tts.stop()
	   this.tts.speak({text:"",locale:'zh-CN',rate:this.speed})
      .then(() => {
        console.log('Stop Success')
      })
      .catch((reason: any) => console.log(reason));

  }
}
