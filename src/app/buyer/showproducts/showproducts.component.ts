import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrl: './showproducts.component.css'
})
export class ShowproductsComponent {

  cats:any
  prods:any
  catid:number=0
  minprice:number=0
  maxprice:number=50000
  minrating:number=0
  
  constructor(public http:HttpClient,public app:AppComponent)
  {
    let url1=this.app.baseurl+'admin/getAll'
      this.http.get(url1).subscribe((data:any)=>
      {
         if(data==null)
          window.alert('wrong')
        else
           this.cats=data
          
      });
     
  }

  show(){
    let url=this.app.baseurl+'buyer/filter';
  
    let obj=[this.catid,this.minprice,this.maxprice,this.minrating]
    
    this.http.post(url,obj).subscribe((data:any)=>
    {
      
       if(data==null)
         window.alert('wrong')
       else
        {
          if(data==0)
            window.alert('no item')
          else
           this.prods=data;
           
          
        }
    });
  }

  updateToServer(prod:any)
{
  let url=this.app.baseurl+'buyer/newRating'+this.app.id+'and'+prod.id+'and'+prod.star;
  this.http.get(url).subscribe((data:any)=>
    {
      
       if(data==null || data==0)
         window.alert('wrong')
       else
        {

       window.alert('done')
         

           
          
        }
    });
}


addToCart(prod:any)
{
  let url=this.app.baseurl+'buyer/addToCart'+this.app.id+'and'+prod.id;
  this.http.get(url).subscribe((data:any)=>
    {
      
       if(data==null || data==0)
         window.alert('wrong')
       else
        {

       if(data==1)
       {
          window.alert('already exist')
       }
       else if(data==2)
       {
          window.alert('done')
       }  

           
          
        }
    });
}
}
