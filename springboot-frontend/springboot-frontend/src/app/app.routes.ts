import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'etudiants',
        loadComponent: () =>
          import('./components/etudiant/etudiant.component').then(m => m.EtudiantComponent)
      }
      
];
