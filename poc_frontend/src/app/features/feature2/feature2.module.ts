import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './components/validation/validation.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { Feature2RoutingModule } from './feature2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Feature2RoutingModule
  ],
  declarations: [ValidationComponent, WidgetsComponent],
  exports: [ValidationComponent, WidgetsComponent]
})
export class Feature2Module { }
