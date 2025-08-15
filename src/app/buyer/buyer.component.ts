import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrl: './buyer.component.css'
})
export class BuyerComponent {
  whatToShow:number=0
 s:String=""
 
change(n:number)
{
   this.whatToShow=n
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
