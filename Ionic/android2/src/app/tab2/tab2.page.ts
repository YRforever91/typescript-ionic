import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public type: string = "名称"
  public search: string
  /**
  * 数据数组
  */
  public arrays: Array<any>=[]
  constructor(public alertController: AlertController, public dataService: DataService) { }

  async typeClick() {

    const alert = await this.alertController.create({
      header: '搜索条件',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '名称',
          value: '名称',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '类型',
          value: '类型'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Ok',
          handler: (ret) => {
            this.type = ret;
            console.log(ret);

          }
        }
      ]
    });
    await alert.present();
  }


  onSearch() {
    this.arrays.length=0//清空

    let data: Array<any> = this.dataService.get("data");
    data.forEach((v,i,array)=>{
     
      if (this.type === "名称") {
        if(v.name.search(this.search)!=-1){
          this.arrays.push(v)
        }
      } else if (this.type === "类型") {
        if(v.type.search(this.search)!=-1){
         
          this.arrays.push(v)
        }
      }
  })
  }

}
