import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { StudentComponent } from './show/student';
import { StudentDetailsComponent } from './details/student-details';


const routes: Routes = [
    // {
    //     path:'', component: WelcomeComponent

    // },
    {
        path: '', component: StudentComponent
    },{
        path: 'new', component: StudentDetailsComponent
    },
    {
        path: 'edit/:id', component: StudentDetailsComponent
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],
    exports:[ RouterModule ]
})
export class StudentRoutingModule { }