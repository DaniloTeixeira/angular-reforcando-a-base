import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [MatTableModule, MatButtonModule, MatIconModule, MatSortModule],
})
export class MaterialModule {}
