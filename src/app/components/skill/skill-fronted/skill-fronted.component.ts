import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
import { DataService } from '../../../service/data.service';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../card/card.component';


@Component({
  selector: 'app-skill-fronted',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, RouterLink, CardComponent],  
  templateUrl: './skill-fronted.component.html',
  styleUrl: './skill-fronted.component.css'
})
export class SkillFrontedComponent {
  isActive: boolean = false;

  // btnF = ():void => {
  //   console.log('click front end')
  // } 

  // btnB = ():void => {
  //   console.log('click back end')
  // }

  dataService: DataService = inject(DataService);
  dataFront: {name: string, image: string, description?: string}[] = this.dataService.getDataFront();   

}
