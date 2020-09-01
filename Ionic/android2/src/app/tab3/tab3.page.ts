import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 /**
   * 数据数组
   */
  public arrays:Array<any>;

  constructor(public alertController:AlertController,public dataService:DataService) {
   
  }

  /**
   * 修改类型
   * @param item 
   */
  async itemTypeClick(item){
    const alert = await this.alertController.create({
      header: '类型',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'video',
          value: 'video',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'game',
          value: 'game'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'music',
          value: 'music'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'other',
          value: 'other'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (ret) => {
            for(let i = 0;i<this.arrays.length;i++){
              if(item.id==this.arrays[i].id){
                this.arrays[i].type = ret;
                this.dataService.set('data',this.arrays)
                return
              }
            }
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * 修改名称或出版商
   * @param item 
   */
  async itemClick(item){
    const alert = await this.alertController.create({
      header: '添加数据',
      inputs: [
        {
          name: 'id',
          type: 'number',
          value:item.id,
          disabled:true 
        },
        {
          name: 'name',
          type: 'text',
          value:item.name,
          placeholder: '请输入名字'
        },
        {
          name: 'type',
          type: 'text',
          value:item.type,
          disabled:true,
          handler: () => {
            console.log('Confirm type');
          }
        },
        {
          name: 'publishers',
          type: 'text',
          value:item.publishers,
          placeholder: '请输入出版商'
        },
       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (ret) => {

            if(ret.name==null || ret.name.trim().length==0){
              this.presentAlert();
              return
            }
            if(ret.publishers==null || ret.publishers.trim().length==0){
              this.presentAlert();
              return
            }
           
            for(let i = 0;i<this.arrays.length;i++){
              if(item.id==this.arrays[i].id){
                this.arrays[i].name = ret.name;
                this.arrays[i].publishers = ret.publishers;
                this.dataService.set('data',this.arrays)
                return
              }
            }
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: '类型',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'video',
          value: 'video',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'game',
          value: 'game'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'music',
          value: 'music'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'other',
          value: 'other'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: '请输入内容',
      message: '名称或者出版商不能为空',
      buttons: ['OK']
    });

    await alert.present();
  
  }


  ngAfterViewChecked (){
    this.arrays= this.dataService.get('data')
  }
}
