import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-cartmng',
  templateUrl: './cartmng.component.html',
  styleUrl: './cartmng.component.css'
})
export class CartmngComponent {
    name:String=""
    list:any

    constructor(public http:HttpClient,public app:AppComponent)
    {
      let url=this.app.baseurl+'admin/getAll'
      this.http.get(url).subscribe((data:any)=>
      {
         if(data==null)
          window.alert('wrong')
        else
           this.list=data
      });
    }
  AddCategory(){
    let url=this.app.baseurl+'admin/addComponent'+this.app.id;
    
    this.http.post(url,this.name).subscribe((data:any)=>
    {
       if(data==null)
         window.alert('wrong')
       else
        {
           this.list.push(data)
        }
    });
  }


}
