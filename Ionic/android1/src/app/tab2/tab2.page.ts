import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';   // Native ：拨号

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public phoneText: number;

  constructor(private callNumber: CallNumber) { }

  onDialing() {

    if(this.phoneText==null){
      alert("手机号为空")
      //TODO 提示手机号为空
      return
    }
    let phone = this.phoneText + "";
    if (phone.trim().length != 0) {
      if (phone.length == 11) {
        this.callNumber.callNumber(phone, true)
          .then(res => console.log('Launched dialer!', res))
          .catch(err => console.log('Error launching dialer', err));

      } else {
        //TODO 提示不是有效手机号
        alert("不是有效手机号")
      }
      return
    }
   
  }
}
