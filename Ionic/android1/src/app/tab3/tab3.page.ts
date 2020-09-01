import { Component, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';//Native ：电量

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public _status: string
  public _battery: number
  public isHint: boolean = true;

  constructor(private batteryStatus: BatteryStatus, private zone: NgZone, private alertController: AlertController) {
    // watch change in battery status
    const subscription = this.batteryStatus.onChange().subscribe(status => {
      zone.run(() => {
        this._battery = status.level;
        this._status = status.isPlugged ? '充电器连接' : '充电器断开'
        if (status.level <= 50 && this.isHint) {
          this.isHint = false;
          this.presentAlert();
        } else if (status.level > 50) {
          this.isHint = true;
        }
      })
      console.log(status.level, status.isPlugged);
    });



    // stop watch
    //subscription.unsubscribe();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: '电量警告',

      message: "电量低于50%，请充电！",
      buttons: ['OK']
    });

    await alert.present();
  }
}
