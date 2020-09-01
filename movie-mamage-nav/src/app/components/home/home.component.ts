import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //当前编辑行
  public currEdit:number = -1;
  //当前选择行
  public currSelected:number = -1;
  public searchTxt:string ="";


  //表头
  public tableHead=["Name","Director","Year","Genere","Notes"]
  public  tableData:Array<any> = [
    { Name: "后来的我们", Director: '刘若英', Year: "2018-4-28", Genere: "Romance Film", Notes: "《后来的我们》是由刘若英执导，张一白监制，井柏然、周冬雨、田壮壮主演的青春文艺片。" },
    { Name: "战狼2", Director: '吴京', Year: "2017-7-27", Genere: "Action Movie", Notes: "《战狼Ⅱ》是吴京执导的动作军事电影，由吴京、弗兰克·格里罗、吴刚、张翰、卢靖姗、淳于珊珊、丁海峰等主演。" },
    { Name: "哥斯拉2:怪兽之王", Director: '迈克尔·道赫蒂', Year: "2019-5-31", Genere: "Science Fiction Film", Notes: "《哥斯拉2：怪兽之王》是由迈克尔·道赫蒂执导，凯尔·钱德勒、维拉·法梅加、米莉·博比·布朗、渡边谦、章子怡、布莱德利·惠特福德、莎莉·霍金斯联袂主演的科幻电影。" },
    { Name: "猫妖传", Director: '陈凯歌', Year: "2017-12-22", Genere: 'Suspense Film', Notes: "该片改编自日本魔幻系列小说《沙门空海之大唐鬼宴》，讲述了一只口吐人语的妖猫搅动长安城，诗人白乐天与僧人空海联手探查，令一段被人刻意掩埋的真相浮出水面的故事。" },
    { Name: "哪吒之魔童降世", Director: '饺子', Year: "2019-7-26", Genere: "Comedy", Notes: "《哪吒之魔童降世》是由霍尔果斯彩条屋影业有限公司出品的动画电影，由饺子执导兼编剧，吕艳婷、囧森瑟夫、瀚墨、陈浩、绿绮、张珈铭、杨卫担任主要配音。该片改编自中国神话故事，讲述了哪吒虽“生而为魔”却“逆天而行斗到底”的成长经历的故事。" },
    { Name: "红海行动", Director: '林超贤', Year: "2018-2-16", Genere: "War Film", Notes: "该片讲述了中国海军“蛟龙突击队”8人小组奉命执行撤侨任务，突击队兵分两路进行救援，但不幸遭到伏击，人员伤亡；同时在粉碎叛军武装首领的惊天阴谋中惨胜的故事。" },
    { Name: "贞子", Director: '中田秀夫，饭田让治，鹤田法男等', Year: "1998-1-31", Genere: "Horror Film", Notes: "午夜凶铃》（日文：リング），是日本一套悬疑惊悚电影，改编自铃木光司的悬疑类科幻小说《环界》，与原著有较大差异。" },
    { Name: "环太平洋:雷霆再起", Director: '斯蒂文·S·迪奈特', Year: "2018-3-23", Genere: "Adventure Film", Notes: "该片讲述了在2035年，更具破坏力的怪兽军团再次突袭地球，为了保卫人类安危、捍卫世界和平，人类再次操控全方位升级后的机甲军团奋起反抗，并最终取得了胜利的故事。" },
    { Name: "风云2", Director: '彭氏兄弟（彭发、彭顺）', Year: "2009-12-9", Genere: "Sowordsmen Film", Notes: "《风云2》是由彭氏兄弟（彭发、彭顺）执导，郭富城、郑伊健、任达华、谢霆锋、蔡卓妍等主演的玄幻武侠片。该片根据马荣成漫画改编，主要讲述了绝无神挥军中土，以聂风、步惊云为首的中原人士和绝无神之间的斗争。" },
    { Name: "湄公河行动", Director: '林超贤', Year: "2016-9-30", Genere: "Crime", Notes: "该片根据“10·5中国船员金三角遇害事件”（湄公河惨案）改编，讲述了一支行动小组为解开中国商船船员遇难所隐藏的阴谋，企图揪出运毒案件幕后黑手的故事。" }
  ]
  public tableDataSearch:Array<any> ;
  
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 增加一行
   */
  addRow(){
    this.tableData.push({ Name: "", Director: '', Year: "", Genere: "", Notes: "" })
  }

 /**
   * 删除一行
   */
  delRow(){
      if(this.currSelected==-1){
          alert("请选择要删除的行！")
          return
      }
      if(this.currSelected>this.tableData.length){
        alert("数组越界！")
        return
      }
  
      if(confirm("Name:"+this.tableData[this.currSelected].Name+","+"真的要删除吗?")){
          this.tableData.splice(this.currSelected,1)//删除改行
          this.currSelected = -1
       }
    }


  /**
   * 编辑行
   */
  editRow(){
    if(this.currSelected==-1){
      alert("请选择要编辑的行！")
      return
    }
    this.currEdit = this.currSelected

  }

   /**
   * 保存行
   */
  saveRow(){
      let iss =false;
      let txt = this.tableData[this.currEdit].Name;//得到输入的Name
  
      for(let i = 0;i<this.tableData.length;i++){
        if(i==this.currEdit) continue
        if(txt=== this.tableData[i].Name){
          alert("电影名字相同，保存失败！")
          return
        }
      }
      this.currEdit = -1;
    }

  /**
   * 搜索
   */
  search(){
    if( this.searchTxt.length==0){
      alert("请输入搜索内容")
      this.reset()
      return
    }
    if(this.tableDataSearch==null){
      //复制原数据
      this.tableDataSearch =this.tableData.concat()
    }
    //清空数组
    this.tableData=[];
    /**
     * 执行搜索
     */
    this.tableDataSearch.forEach((v,i,array)=>{
        if(v.Name.search(this.searchTxt)!=-1 || v.Director.search(this.searchTxt)!=-1){
          this.tableData.push(v)
        }
    })
  }

  /**
   * 刷新表格-主要针对搜索后的表格
   */
  reset(){
    if(this.tableDataSearch!=null){
      this.tableData   =  this.tableDataSearch.concat()
      this.tableDataSearch = null
    }
    this.searchTxt=""
    this.currSelected = -1
   
  }

  /**
   * 点击 选中/取消 选中行
   * @param e 
   * @param key 
   */
  trClick(e,key){
    
    if(key == this.currSelected){
      //再次点击取消选择
      this.currSelected = -1
      return
    }
    this.currSelected = key;
  
  }
}
