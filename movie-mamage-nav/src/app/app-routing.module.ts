import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home/home.component'//导入组件
import {DebugComponent} from './components/debug/debug.component'
import {HelpComponent} from './components/help/help.component'
import {AboutComponent} from './components/about/about.component'

const routes: Routes = [
  //注册路由
  {path:'home',component:HomeComponent},
  {path:'debug',component:DebugComponent},
  {path:'help',component:HelpComponent},
  {path:'about',component:AboutComponent},
  {path:"**",redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
