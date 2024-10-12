import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterfruitsPipe } from "../../filterfruits.pipe";



@Component({
  selector: 'app-angular-pipes-lab',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterfruitsPipe],
  templateUrl: './angular-pipes-lab.component.html',
  styleUrl: './angular-pipes-lab.component.scss'
})
export class AngularPipesLabComponent {

  today:number=Date.now();
  price:number=2500.5;
  obj={name:'john',age:25};

  updatename(){
    this.obj.name='jane doe'
  }

  searchtext:string='';

  array:any=['Apple','Banana','Greenapple','mango']

  
}
