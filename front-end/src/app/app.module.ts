import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { CabecComponent } from './ui/cabec/cabec.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPrincipalComponent } from './ui/menu-principal/menu-principal.component';
import { RodapeComponent } from './ui/rodape/rodape.component';
import { CombustivelListComponent } from './combustivel/combustivel-list/combustivel-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirDlgComponent } from './ui/excluir-dlg/excluir-dlg.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecComponent,
    MenuPrincipalComponent,
    RodapeComponent,
    CombustivelListComponent,
    ExcluirDlgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ExcluirDlgComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
