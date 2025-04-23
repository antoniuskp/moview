import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() max: number = 5;

  get stars(): boolean[] {
    return Array(this.max).fill(false).map((_, i) => i < this.rating);
  }
}
