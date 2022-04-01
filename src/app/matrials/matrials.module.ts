import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';




const matrials = [MatButtonModule, MatIconModule,MatButtonToggleModule ,MatBadgeModule,MatProgressSpinnerModule,MatChipsModule,MatFormFieldModule];

@NgModule({
  imports: [matrials],
  exports: [matrials],
})
export class MaterialModule {}
