import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackendComponent } from './components/backend/backend.component';
import { TranslationComponent } from './components/translation/translation.component';
@NgModule({
  imports: [
    RouterModule.forChild([
     {path:'backend', component: BackendComponent},
     {path:'translation', component: TranslationComponent},
    ])
  ],
  exports : [ RouterModule ]
})
export class Feature1RoutingModule { }
