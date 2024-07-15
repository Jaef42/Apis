import { Routes } from '@angular/router';
import { VinoComponent } from './vino/vino.component';
import { MargaritaComponent } from './margarita/margarita.component';
import { VodkaComponent } from './vodka/vodka.component';
import path from 'path';
import { TequilaComponent } from './tequila/tequila.component';

export const routes: Routes = [
    {
        path:'vino',
        component: VinoComponent,
    },
    {
        path:'margarita',
        component: MargaritaComponent,
    },
    {
        path:'vodka',
        component: VodkaComponent,
    },
    {
        path:'tequila',
        component:TequilaComponent
    },    
];
