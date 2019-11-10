import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TemplateComponent } from './components/template/template.component';


const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'form', component: TemplateComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUNTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});