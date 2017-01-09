import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './components/validation/validation.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { Feature2RoutingModule } from './feature2-routing.module';
import { SharedModule } from './../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Feature2RoutingModule
  ],
  declarations: [ValidationComponent, WidgetsComponent],
  exports: [ValidationComponent, WidgetsComponent]
})
export class Feature2Module { }
