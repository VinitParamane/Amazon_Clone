import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  name:String=""
  list:any
  list1:any

  price:number=0
  quantity:number=0
  description:String=""
  discount:number=0
  category:number=0


  constructor(public http:HttpClient,public app:AppComponent)
  {
  let url=this.app.baseurl+'seller/getAll'+this.app.id
    this.http.get(url).subscribe((data:any)=>
    {
       if(data==null)
        window.alert('wrong')
      else
         this.list=data
        
        
    });

    
   let url1=this.app.baseurl+'admin/getAll'
      this.http.get(url1).subscribe((data:any)=>
      {
         if(data==null)
          window.alert('wrong')
        else
           this.list1=data
          
      });
  }
AddCategory(){
  let url=this.app.baseurl+'seller/addProduct';

  let obj={
    "name":this.name,
    "userid":this.app.id,
    "price":this.price,
    "quantity":this.quantity,
    "description":this.description,
    "discount":this.discount,
    "categoryid":this.category

  }
  
  this.http.post(url,obj).subscribe((data:any)=>
  {
     if(data==null)
       window.alert('wrong')
     else
      {
         this.list.push(data);
         this.name=""
         this.price=0
         this.quantity=0
         this.description=""
         this.discount=0
         this.category=0
      }
  });
}

}
