import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material-module'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

import { TrabajadorService } from './services/trabajador.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrabajadorDataTableComponent } from './components/trabajador/trabajador-data-table/trabajador-data-table.component';
import { TrabajadorDialogComponent } from './components/trabajador/trabajador-dialog/trabajador-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    TrabajadorDataTableComponent,
    TrabajadorDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: TrabajadorDataTableComponent, pathMatch: 'full' }
    ]),
    BrowserAnimationsModule
  ],
  providers: [TrabajadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
