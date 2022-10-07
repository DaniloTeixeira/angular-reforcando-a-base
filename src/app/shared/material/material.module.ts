import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  exports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
  ],
})
export class MaterialModule {}
