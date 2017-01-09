import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1RoutingModule } from './feature1-routing.module';
import { BackendComponent } from './components/backend/backend.component';
import { TranslationComponent } from './components/translation/translation.component';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';
import { BackendService } from './services/backend.service';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Feature1RoutingModule,
    SharedModule
  ],
  declarations: [BackendComponent, TranslationComponent],
  exports: [BackendComponent, TranslationComponent],
  providers:[BackendService]
})
export class Feature1Module { }
