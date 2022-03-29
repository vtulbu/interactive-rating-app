import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-card-content',
  templateUrl: './rating-card-content.component.html',
  styleUrls: ['./rating-card-content.component.css'],
})
export class RatingCardContentComponent implements OnInit {
  selectedRate: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onClickRating(event: Event) {
    this.selectedRate = Number((event.target as HTMLButtonElement).textContent);
  }
}
