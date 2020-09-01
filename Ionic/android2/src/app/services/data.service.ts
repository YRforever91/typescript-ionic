import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

public get(key:string){
    return JSON.parse(localStorage.getItem(key))
}
public set(key:string,value:any){
   //localStorage是h5中的，这里可以直接使用
    localStorage.setItem(key,JSON.stringify(value));
}


}
