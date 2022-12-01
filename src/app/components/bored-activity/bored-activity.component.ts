import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { BoredActivityModel } from '../../models/bored-activity.model';
import { BoredActivityService } from '../../services/bored-activity.service';

@Component({
  selector: 'app-bored-activity',
  templateUrl: './bored-activity.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoredActivityComponent {
  readonly activity$: Observable<BoredActivityModel> = this._boredActivityService.getOne();

  constructor(private _boredActivityService: BoredActivityService) {
  }
}
