import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazon';
  baseurl="http://localhost:8080/"
  whatToShow:number=0
  id:number=0
  
}
