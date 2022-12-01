import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  readonly products$: Observable<ProductModel[]> = this._productsService.getAll();

  constructor(private _productsService: ProductsService) {
  }
}
