import { Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ProyectComponent } from './views/proyect/proyect.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { SkillComponent } from './components/skill/skillBackend/skill.component';
import { SkillFrontedComponent } from './components/skill/skill-fronted/skill-fronted.component';


export const routes: Routes = [      
    { path: 'inicio', component: HomeComponent},
    { path: 'sobre mi', component: AboutComponent},
    { path: 'proyecto', component: ProyectComponent},
    { path: 'contacto', component: ContactComponent},    
    { path: 'skills', component: SkillComponent},
    { path: 'skills-fronted', component: SkillFrontedComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full' }    
    
];
