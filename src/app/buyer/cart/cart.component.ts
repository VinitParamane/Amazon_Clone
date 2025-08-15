import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

   list:any =[]
   sum:number=0
  constructor(public http:HttpClient,public app:AppComponent)
  {
    let url1=this.app.baseurl+'buyer/getCart'+this.app.id
      this.http.get(url1).subscribe((data:any)=>
      {
        if(data==null)
        {
          window.alert('exception')
        }
        else
        {
          if(data.length==0 )
            window.alert('nothing to show')
          else
          {
            this.list=data
           
            for(let i=0;i<this.list.length;i++)
              {
                 this.list[i].quant=1;
              }
          }
        }
        
      });

      
     
  }

  AD(l:any)
  {
    
    return (l.price*l.quant)-(l.price*l.quant)*l.discount/100;
  }

  fix()
  {
    let sum=0
    for(let i=0;i<this.list.length;i++)
      {
      
        let num1=(this.list[i].price*this.list[i].quant)
        let num=num1*(100-this.list[i].discount)/100
         sum=sum+num
      }
    
      return sum
  }


  placeOrder()
  {
    let url1=this.app.baseurl+'buyer/place'+this.app.id
    let my: number[][] = [];
    for(let i=0;i<this.list.length;i++)
      {
        if (!my[i]) {
          my[i] = [];
        }
        
        console.log(this.list[i].id)
        // Assign values to the sub-array
        my[i][0] = this.list[i].id;    // Assign the id to index 0 of the sub-array
        my[i][1] = this.list[i].quant;
    }

      
    
     this.http.post(url1,my).subscribe((data:any)=>
     {
       if(data==null)
       {
         window.alert('exception')
       }
       else
       {
        if(data==1){
          window.alert('done')
          this.list=[]
        }
        else
           window.alert('error')
       }
  
      
     });
  }



 checkQuant(l:any)
 {
    if(l.quant>l.quantity)
    {
      let s:String
      s="we have only "+l.quantity+" products"
      window.alert(s)
      l.quant=l.quantity
    }
 }
  delete(l:any)
  {
    let url1=this.app.baseurl+'buyer/delete'+l.id
    this.http.get(url1).subscribe((data:any)=>
    {
      if(data==null)
      {
        window.alert('exception')
      }
      else
      {
        if(data==1)
        {
          window.alert('done')
          let index=this.list.indexOf(l)
          this.list.splice(index,1)

        }
        else
        {
          window.alert('exception')
        }
      }
      
    });
  }








}
