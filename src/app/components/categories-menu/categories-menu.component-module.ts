import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CategoriesMenuComponent } from './categories-menu.component';

@NgModule({
  imports: [
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    MatButtonToggleModule
  ],
  declarations: [CategoriesMenuComponent],
  providers: [],
  exports: [CategoriesMenuComponent]
})
export class CategoriesMenuComponentModule {
}
