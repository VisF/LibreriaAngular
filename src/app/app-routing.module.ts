import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaAboutComponent } from './libreria-about/libreria-about.component';
import { LibreriaComponent } from './libreria/libreria.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/libreria',
    pathMatch: 'full'
  },
  {path: 'libreria',
    component: LibreriaComponent
  },
  {path: 'about',
    component: LibreriaAboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
