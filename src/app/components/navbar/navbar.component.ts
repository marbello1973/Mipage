import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd} from '@angular/router';
import { routes } from '../../app.routes'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  {

  public isMenuOpen = false;

  menuItem(): void{
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Hola')
     
  }

  constructor (){
    //console.log(this.isMenuOpen)
  }

  public menuRoutes = routes.map((route) => route)
    .filter((route) => !route.path?.includes('**'))
    .filter((route) => !route.path?.includes('skills'))



}
