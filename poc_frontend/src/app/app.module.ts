import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';

//core module
import { CoreModule } from './core/core.module';

//shared module
import { SharedModule} from './shared/shared.module';

//feature modules
import { Feature1Module } from './features/feature1/feature1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SharedModule,
    CoreModule,
    Feature1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
