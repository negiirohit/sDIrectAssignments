import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatListModule } from '@angular/material/list';

//Overlaying 
import { MatDialogModule } from '@angular/material/dialog';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

//for form
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import { MatRadioModule } from '@angular/material/radio';

import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatListModule,
  FlexLayoutModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,    
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  FormsModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatRadioModule
  ],

  exports: [
   CommonModule,
   MatToolbarModule,
   MatListModule,
   FlexLayoutModule,
   MatGridListModule,
   MatCardModule,
   MatButtonModule,
   MatDialogModule,    
   MatFormFieldModule,
   MatInputModule,
   MatCheckboxModule,
   FormsModule,
   MatSelectModule,
   MatSlideToggleModule,
   MatSliderModule,
   MatRadioModule
   ],
})
export class CustomMaterialModule { }