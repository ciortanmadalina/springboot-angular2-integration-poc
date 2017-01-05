import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend/backend.component';
import { Feature1RoutingModule } from './feature1-routing.module';
import { TranslationComponent } from './translation/translation.component';

@NgModule({
  imports: [
    CommonModule,
    Feature1RoutingModule
  ],
  declarations: [BackendComponent, TranslationComponent],
  exports: [BackendComponent, TranslationComponent]
})
export class Feature1Module { }
