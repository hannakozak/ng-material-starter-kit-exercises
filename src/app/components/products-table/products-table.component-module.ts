import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductsTableComponent } from './products-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [ProductsTableComponent],
  providers: [],
  exports: [ProductsTableComponent]
})
export class ProductsTableComponentModule {
}
