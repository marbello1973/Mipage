import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CardComponent } from '../../components/card/card.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations:[
    trigger("myAnimacion", [
      state("on", style({ opacity: 0})),
      state("off", style({ opacity: 1})),
      transition('on <=> off', animate('500ms ease-in-out')),      
    ])
  ]
})
export class ContactComponent {

  public myState: string = "on";
  public email: string = 'david.marbello@outlook.com'

  ngOnInit(): void {
    setTimeout(() => {
      this.myState = "off";
    }, 1000)
  }

  constructor() { }

  public changeState(){
    this.myState = this.myState == "on" ? "off" : "on";
  }

}
