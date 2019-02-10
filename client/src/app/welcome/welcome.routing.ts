import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './welcome';


const routes: Routes = [
    {
        path: '', component: WelcomeComponent
    },
    /*{
        path: 'support/:id/:id2', component: WelcomeComponent
    },*/
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],
    exports: [ RouterModule ]
})
export class WelcomeRoutingModule { }
