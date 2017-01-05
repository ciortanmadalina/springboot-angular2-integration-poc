import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { Http } from '@angular/http';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { MenuComponent } from './components/menu/menu.component';
 export function translationConfigurationFactory (http: Http) { return new TranslateStaticLoader(http, 'app/i18n', '.json');}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forRoot(
                    { provide: TranslateLoader,
                      useFactory: translationConfigurationFactory,
                      deps: [Http]
                    }
                  )
  ],
  declarations: [MenuComponent],
  exports : [MenuComponent]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule, private translateService: TranslateService) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
