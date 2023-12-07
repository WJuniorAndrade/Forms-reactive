import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask  } from 'ngx-mask';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  providers: [provideNgxMask ({})],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
