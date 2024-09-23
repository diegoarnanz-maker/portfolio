import { Routes } from '@angular/router';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { CarrouselProyectosComponent } from './components/carrousel-proyectos/carrousel-proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
{ path: '', component: HomeComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'proyectos', component: CarrouselProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
];
