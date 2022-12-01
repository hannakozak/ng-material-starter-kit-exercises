import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AgeService } from '../../services/age.service';
import {AgeModel} from "../../models/age.model";

@Component({
  selector: 'app-age-prediction',
  styleUrls: ['./age-prediction.component.scss'],
  templateUrl: './age-prediction.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgePredictionComponent {
  readonly age$: Observable<AgeModel> = this._activatedRoute.params.pipe
  (switchMap(data => this._ageService.getOne(data['name'])));

  constructor(private _activatedRoute: ActivatedRoute, private _ageService: AgeService) {
  }
}
