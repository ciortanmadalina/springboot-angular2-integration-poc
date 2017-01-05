import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  {path: '', redirectTo: '/backend', pathMatch: 'full'}
  /*,
  {path:'candidatures', loadChildren: 'app/features/candidatures/candidatures-routing.module#CandidaturesRoutingModule'},
  {path:'social-services', loadChildren: 'app/features/social-services/social-services.module#SocialServicesModule'},
  {path:'buildings', loadChildren: 'app/features/buildings/buildings-routing.module#BuildingsRoutingModule'},
  {path:'shared', loadChildren: 'app/shared/shared-routing.module#SharedRoutingModule'}
  */
];

export const routing : any = RouterModule.forRoot(appRoutes);
