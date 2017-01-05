import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  {path: '', redirectTo: '/backend', pathMatch: 'full'},
  {path:'features2', loadChildren: 'app/features/feature2/feature2.module#Feature2Module'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
