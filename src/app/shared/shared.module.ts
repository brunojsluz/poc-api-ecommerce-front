import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    BrowserModule
  ]
})
export class SharedModule {

}
