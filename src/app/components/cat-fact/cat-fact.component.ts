import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactModel } from '../../models/cat-fact.model';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cat-fact',
  styleUrls: ['./cat-fact.component.scss'],
  templateUrl: './cat-fact.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactComponent {
  readonly catFact$: Observable<CatFactModel> = this._catService.getOne();

  constructor(private _catService: CatService) {
  }
}
