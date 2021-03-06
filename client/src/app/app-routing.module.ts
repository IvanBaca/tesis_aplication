import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
const routes: Routes = [
  {
    path: 'student', loadChildren: './student/student.module#StudentModule'
  },
  {
    path: '', loadChildren: './welcome/welcome.module#WelcomeModule'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
