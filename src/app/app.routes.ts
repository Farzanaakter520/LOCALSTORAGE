import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    
    { path: 'form', component: FormComponent},
    { path: '**', redirectTo: ''},
];
