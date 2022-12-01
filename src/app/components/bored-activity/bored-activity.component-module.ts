import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BoredActivityComponent } from './bored-activity.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [BoredActivityComponent],
  providers: [],
  exports: [BoredActivityComponent]
})
export class BoredActivityComponentModule {
}
