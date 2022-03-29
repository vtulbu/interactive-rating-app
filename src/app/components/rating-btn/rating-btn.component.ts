import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-btn',
  templateUrl: './rating-btn.component.html',
  styleUrls: ['./rating-btn.component.css'],
})
export class RatingBtnComponent implements OnInit {
  clickedButton!: number;
  hoveredButton!: number;
  @Output() onClickRating = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(e: Event) {
    this.clickedButton = Number((e.target as HTMLElement).textContent);

    this.onClickRating.emit(e);
  }

  onHover(e: Event) {
    this.hoveredButton = Number((e.target as HTMLElement).textContent);
  }

  onOut() {
    this.hoveredButton = 0;
  }
}
