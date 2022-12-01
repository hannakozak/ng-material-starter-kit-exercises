import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-list',
  styleUrls: ['./categories-list.component.scss'],
  templateUrl: './categories-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent {
  readonly list$: Observable<string[]> = this._categoryService.getAll();

  constructor(private _categoryService: CategoryService) {
  }
}
