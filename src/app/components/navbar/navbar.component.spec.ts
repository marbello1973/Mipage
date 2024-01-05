import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let location: Location;
  let routes: Routes = [
    {path: 'home', component: NavbarComponent},
    {path: 'about', component: NavbarComponent},
    {path: 'project', component: NavbarComponent},
    {path: 'contact', component: NavbarComponent}
  ]  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes(routes), 
        NavbarComponent]
      });    
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;   
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);  
    
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should render component DOM', () => {    
    const compiled = fixture.nativeElement;
    const nav = compiled.querySelector('nav');
    const div = compiled.querySelector('div');    
    expect(nav).toBeTruthy();
    expect(div).toBeTruthy();    
  })

  it('should lenght three anchor', ()=> {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const anchor = compiled.querySelectorAll('a');
    expect(anchor.length).toBe(4);
  })

  it('should render omponent DOM', ()=> {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const home = compiled.querySelector('#home');
    expect(home?.textContent).toContain('Inicio');

    const about = compiled.querySelector('#about');
    expect(about?.textContent).toContain('Sobre mi');

    const project = compiled.querySelector('#project');
    expect(project?.textContent).toContain('Proyectos');

    const contact = compiled.querySelector('#contact');
    expect(contact?.textContent).toContain('Contacto');
  })

  it('should have "Inicio" class on the home link', ()=> {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelector('#home');
    expect(homeLink).toBeTruthy();
    expect(homeLink?.classList).toContain('Inicio');    
    
  })

  it('should have "Sobre mi" class on the about link', ()=> {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const aboutLink = compiled.querySelector('#about');
    expect(aboutLink).toBeTruthy();
    expect(aboutLink?.classList).toContain('Menu');    
    
  })

  it('should have "Proyectos" class on the project link', ()=> {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const projectLink = compiled.querySelector('#project');
    expect(projectLink).toBeTruthy();
    expect(projectLink?.classList).toContain('Menu');    
    
  })

  it('should have "Contacto" class on the contact link', ()=> {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const contactLink = compiled.querySelector('#contact');
    expect(contactLink).toBeTruthy();
    expect(contactLink?.classList).toContain('Menu');    
  })

  it('should have "Inicio" class on the home link', async ()=> {
    fixture.detectChanges();    
    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelector('#home');
    expect(homeLink).toBeTruthy();

    await fixture.ngZone!.run(async ()=> {
      await router.navigateByUrl('/home');    
    })

    await fixture.whenStable();

    fixture.detectChanges();    

    expect(homeLink?.classList.contains('active')).toBeTruthy    

    const errorMessages = compiled.querySelectorAll('.error-message');

    expect(errorMessages).toBeTruthy(); 
    
  }) 

  it('should have "Sobre mi" class on the about link', async ()=> {
    fixture.detectChanges();    
    const compiled = fixture.nativeElement as HTMLElement;
    const aboutLink = compiled.querySelector('#about');
    expect(aboutLink).toBeTruthy();

    await fixture.ngZone!.run(async ()=> {
      await router.navigateByUrl('/about');    
    })
    
    await fixture.whenStable();

    fixture.detectChanges(); 
    
    const errorMessages = compiled.querySelectorAll('.error-message');
    
    expect(errorMessages).toBeTruthy();

    expect(aboutLink?.classList.contains('active')).toBeTruthy     
    
  }) 

  it('should have "Proyectos" class on the project link', async ()=> {
    fixture.detectChanges();    
    const compiled = fixture.nativeElement as HTMLElement;
    const aboutLink = compiled.querySelector('#project');
    expect(aboutLink).toBeTruthy();

    await fixture.ngZone!.run(async ()=> {
      await router.navigateByUrl('/project');    
    })
    
    await fixture.whenStable();

    fixture.detectChanges(); 
    
    const errorMessages = compiled.querySelectorAll('.error-message');
    
    expect(errorMessages).toBeTruthy();

    expect(aboutLink?.classList.contains('active')).toBeTruthy     
    
  }) //contact

  it('should have "Contacto" class on the contact link', async ()=> {
    fixture.detectChanges();    
    const compiled = fixture.nativeElement as HTMLElement;
    const aboutLink = compiled.querySelector('#contact');
    expect(aboutLink).toBeTruthy();

    await fixture.ngZone!.run(async ()=> {
      await router.navigateByUrl('/contact');    
    })
    
    await fixture.whenStable();

    fixture.detectChanges(); 
    
    const errorMessages = compiled.querySelectorAll('.error-message');
    
    expect(errorMessages).toBeTruthy();

    expect(aboutLink?.classList.contains('active')).toBeTruthy     
    
  })  

});

