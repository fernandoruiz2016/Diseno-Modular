import { Routes } from '@angular/router';
import { GestionHome } from './features/gestionAcademica/pages/gestion-home/gestion-home';
import { BibliotecaHome } from './features/biblioteca/pages/biblioteca-home/biblioteca-home';
import { BienestarHome } from './features/bienestarEstudiantil/pages/bienestar-home/bienestar-home';

export const routes: Routes = [
    {
        path: "gestion",
        component: GestionHome,
    },
    {
        path: "biblioteca",
        component: BibliotecaHome,
    },
    {
        path: "bienestar",
        component: BienestarHome,
    },
];
