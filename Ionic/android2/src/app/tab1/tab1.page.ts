import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  /**
   * 数据数组
   */
  public arrays:Array<any>;

  constructor(public alertController:AlertController,public dataService:DataService) {

    this.arrays= dataService.get('data')
    if(this.arrays==null){
      console.log("初始数据...")
      this.arrays= [
      {id:1,name:"哆啦A梦",type:"video",publishers:"小学馆"},
      {id:2,name:"蜡笔小新",type:"video",publishers:"小学馆"},
      {id:3,name:"烈火之前",type:"video",publishers:"美国"},
      {id:4,name:"白发魔女传",type:"video",publishers:"中国大陆"},
      {id:5,name:"城市天际线",type:"game",publishers:"Steam"},
      {id:6,name:"英雄联盟",type:"game",publishers:"腾讯"},
      {id:7,name:"一刀99999",type:"game",publishers:"腾讯"},
      {id:8,name:"新年快乐",type:"music",publishers:"小虎队"},
      {id:9,name:"红尘客栈",type:"music",publishers:"周杰伦"},
      {id:10,name:"再遇见",type:"music",publishers:"苏打绿"},
      {id:11,name:"泡椒方便面",type:"other",publishers:"康帅傅"},]
      dataService.set('data',this.arrays)
    }else{
      console.log("读取本地数据...")
    }
  }
 async onAdd(){
    const alert = await this.alertController.create({
      header: '添加数据',
      inputs: [
        {
          name: 'id',
          type: 'number',
          value:this.arrays.length + 1,
          disabled:true 
        },
        {
          name: 'name',
          type: 'text',
          placeholder: '请输入名字'
        },
        {
          name: 'type',
          type: 'text',
          value:"other",
          disabled:true,
          handler: () => {
            console.log('Confirm type');
          }
        },
        {
          name: 'publishers',
          type: 'text',
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
            this.arrays.push(ret)
            this.dataService.set('data',this.arrays)
         
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

 
}
