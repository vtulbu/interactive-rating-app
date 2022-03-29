import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() typeOfBtn!: string;
  @Input() routerLink!: string;
  @Input() stateData!: any;

  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: Event) {
    this.btnClick.emit(event);
    event.preventDefault();
  }
}
