import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 
  myid;
  constructor(private route:ActivatedRoute){
    this.myid=this.route.snapshot.paramMap.get('id')
  }

}
