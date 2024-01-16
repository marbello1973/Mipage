import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
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
  
  constructor ( ){ }

  
  menuItem(): void{    
    this.isMenuOpen = !this.isMenuOpen;      
  }

  closeMenu(): void{
    if(this.isMenuOpen){
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onClick(event: Event): void {
    this.closeMenu();
  }
 


  public scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      this.isMenuOpen = false;
    }
  }

  public menuRoutes = routes.map((route) => route)
    .filter((route) => !route.path?.includes('**'))
    .filter((route) => !route.path?.includes('skills'))



}
