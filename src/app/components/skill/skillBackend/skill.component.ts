import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
import { DataService } from '../../../service/data.service';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, RouterLink],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent { 
  
  isActive: boolean = false;

  // btnF = ():void => {
  //   console.log('click front end')
  // } 

  // btnB = ():void => {
  //   console.log('click back end')
  // }


  dataService: DataService = inject(DataService);
  data: {name: string, image: string, description?: string}[] = this.dataService.getData(); 

  
}






