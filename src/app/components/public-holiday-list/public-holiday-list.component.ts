import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayModel } from '../../models/holiday.model';
import { HolidayService } from '../../services/holiday.service';

@Component({
  selector: 'app-public-holiday-list',
  styleUrls: ['./public-holiday-list.component.scss'],
  templateUrl: './public-holiday-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidayListComponent {
  readonly list$: Observable<HolidayModel[]> = this._holidayService.getAll();

  constructor(private _holidayService: HolidayService) {
  }
}
