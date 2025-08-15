import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:String=""
  password:String="";

  constructor(public http:HttpClient,public app:AppComponent)
  {

  }

  login(){
    let url=this.app.baseurl+'login/log'
    let obj=[this.username,this.password]

    
    this.http.post(url,obj).subscribe((data:any)=>
    {
      
      if(data.id==null)
        window.alert('wrong')
      else
      {
       if(data.id<1)
        window.alert(data.error)
        else
         {
        this.app.id=data.id
        this.app.whatToShow=data.accountType
      }}

    })

    
  }

}
