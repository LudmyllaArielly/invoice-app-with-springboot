import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './pages/components/invoice/list/list.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { ListModule } from './pages/components/invoice/list/list.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatTableModule,
    AppRoutingModule,
    ListModule
  ],

  exports: [
    ListComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
