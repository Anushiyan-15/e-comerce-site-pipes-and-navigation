import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightpipePipe } from '../../highlightpipe.pipe';
import { CommonModule, NgFor } from '@angular/common';
import { HighlightdirectiveDirective } from '../../highlightdirective.directive';
import { AlphabetdirectiveDirective } from '../../alphabetdirective.directive';

@Component({
  selector: 'app-anugular-custom-pipe',
  standalone: true,
  imports: [FormsModule,HighlightpipePipe,NgFor,HighlightdirectiveDirective,AlphabetdirectiveDirective,CommonModule],
  templateUrl: './anugular-custom-pipe.component.html',
  styleUrl: './anugular-custom-pipe.component.scss'
})
export class AnugularCustomPipeComponent {

  searchtext:string='';

para:string="Everyone knows that paper is made from trees. But when one looks at trees, one cannot imagine that something so soft and fragile as the paper is made is so hard and strong. Plant materials such as wood are made of fibres known as cellulose. It is the primary ingredient in paper making. Raw wood is first converted into pulp consisting of a mixture of Cellulose, lignin, water and some chemicals. The pulp can be made mechanically through grinders or through chemical processes. Short fibres are produced by mechanical grinding. The paper produced in this way is weak and is used to make newspapers, magazines and phonebooks."

text:string='';



}
