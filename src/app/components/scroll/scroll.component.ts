
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { DataService } from '../../service/data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css'], 
  animations:[
    trigger("myAnimacion", [
     
      state("on", style({ opacity: 0})),
      state("off", style({ opacity: 1})),    
      transition('on <=> off', animate('300ms ease-out')),      
    ])
  ]
})
export class ScrollComponent  {

  projectDataService: { 
    id: number, 
    name: string, 
    imagen: string, 
    url: string, 
    title: string,
    subtitle:{[key:string]: string}[],   
    description: string, 
    tecnologies: string[]}[] = this.proyectService.getDataProject();

  public currentProject: number = 0;
  public finalPosition: string | number = 0;
  


  constructor(private proyectService: DataService){
    this.projectDataService = this.proyectService.getDataProject()   
   
    
  } 
 
  
  public algorithms: string[] = this.projectDataService.flatMap((project) => project.subtitle.map((item) => item['algoritmos'] ? item['algoritmos'] : '')).filter((item) => item !== '')
  public resources: string[] = this.projectDataService.flatMap((project) => project.subtitle.map((item) => item['recursos'] ? item['recursos'] : '')).filter((item) => item !== '')
  public streaming: string[] = this.projectDataService.flatMap((project) => project.subtitle.map((item) => item['streaming'] ? item['streaming'] : '')).filter((item) => item !== '')
  public cuestionarios: string[] = this.projectDataService.flatMap((project) => project.subtitle.map((item) => item['cuestionarios'] ? item['cuestionarios'] : '')).filter((item) => item !== '')

  
  public myState: string = "on";

  ngOnInit(): void {
    setTimeout(() => {
      this.myState = "off";
    }, 500)
  }

  public changeState(){
    this.myState = 'off'       
  }

  //pagina siguiente
  onclikNext():void{
    if(this.currentProject < this.projectDataService.length - 1){
      this.currentProject++;      
    }
  }

  //pagina anterior
  onclickPrev():void{
    if(this.currentProject > 0){
      this.currentProject--;      
    }
  }

  ngOnDestroy(): void {
    this.projectDataService = this.proyectService.getDataProject()
  }



 
}

  

