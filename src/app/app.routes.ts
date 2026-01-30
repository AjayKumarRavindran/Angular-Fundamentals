import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Contact } from './Pages/contact/contact';
import { About } from './Pages/about/about';

export const routes: Routes = [{path:'', component:Home},
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact}
];
