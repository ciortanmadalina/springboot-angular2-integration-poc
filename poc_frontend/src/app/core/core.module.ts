import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { Http } from '@angular/http';
import { MenuComponent } from './menu/menu.component';
 export function translationConfigurationFactory (http: Http) { return new TranslateStaticLoader(http, 'app/i18n', '.json');}
@NgModule({
  imports: [
    CommonModule,
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
export class CoreModule { }
