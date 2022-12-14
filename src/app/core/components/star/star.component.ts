import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnChanges {
  @Input() rating!: number;

  starWidth?: number;

  ngOnChanges(): void {
    this.starWidth = (this.rating * 84) / 5;
  }
}
