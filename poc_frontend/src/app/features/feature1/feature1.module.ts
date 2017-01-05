import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1RoutingModule } from './feature1-routing.module';
import { BackendComponent } from './components/backend/backend.component';
import { TranslationComponent } from './components/translation/translation.component';
import { TranslateModule } from 'ng2-translate/ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Feature1RoutingModule
  ],
  declarations: [BackendComponent, TranslationComponent],
  exports: [BackendComponent, TranslationComponent]
})
export class Feature1Module { }
