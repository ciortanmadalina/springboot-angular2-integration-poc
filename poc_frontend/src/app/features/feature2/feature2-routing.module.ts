import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ValidationComponent } from './components/validation/validation.component';
import { WidgetsComponent } from './components/widgets/widgets.component';

@NgModule({
  imports: [
    RouterModule.forChild([
     {path: 'features2', redirectTo: 'features2/validation', pathMatch: 'full'},
     {path:'features2/validation', component: ValidationComponent},
     {path:'features2/widgets', component: WidgetsComponent}
    ])
  ],
  exports : [ RouterModule ]
})
export class Feature2RoutingModule { }
