import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollComponent } from '../../components/scroll/scroll.component';


@Component({
  selector: 'app-proyect',
  standalone: true,
  imports: [CommonModule, ScrollComponent],
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css'],  
})
export class ProyectComponent  {   
  
}
