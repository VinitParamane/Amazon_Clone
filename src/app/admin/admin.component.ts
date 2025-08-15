import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

 whatToShow:number=0
 s:String=""
 
change()
{
   this.whatToShow=1
}


  


  

  constructor(public http:HttpClient,public app:AppComponent)
  {
    let url=this.app.baseurl+'login/getName'+this.app.id
     http.get(url).subscribe((data:any)=>
      {
         if(data==null)
          window.alert('wrong')
         else
           this.s=data[0]
      });
  }


}
