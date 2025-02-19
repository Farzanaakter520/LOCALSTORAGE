import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    
    { path: 'form', component: FormComponent},
    { path: 'list', component: ListComponent},
    { path: '**', redirectTo: ''},
];
