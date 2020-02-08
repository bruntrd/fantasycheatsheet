import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSelectModule,
  MatList, MatListModule
} from '@angular/material';
import { AppComponent } from './app.component';
import {CheatsheetCreateComponent} from './cheatsheet/cheatsheet-create/cheatsheet-create.component';
import {HeaderComponent} from './header/header.component';
import {CheatsheetMainComponent} from './cheatsheet/cheatsheet-main/cheatsheet-main.component';
import {CheatsheetStoredComponent} from './cheatsheet/cheatsheet-stored/cheatsheet-stored.component';


@NgModule({
  declarations: [
    AppComponent,
    CheatsheetCreateComponent,
    HeaderComponent,
    CheatsheetMainComponent,
    CheatsheetStoredComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
