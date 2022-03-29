import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks-card',
  templateUrl: './thanks-card.component.html',
  styleUrls: ['./thanks-card.component.css'],
})
export class ThanksCardComponent implements OnInit {
  @Input() rating!: any;

  constructor(private router: Router) {
    this.rating = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {}
}
