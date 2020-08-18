import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'flight-status-toggle',
  templateUrl: './flight-status-toggle.component.html',
  styleUrls: ['./flight-status-toggle.component.css']
})
export class FlightStatusToggleComponent implements OnInit {

  constructor() { }

  @Input() status: boolean;
  @Output() statusChange = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  toggle(): void {
    this.status = !this.status;
    this.statusChange.next(this.status);
  }

}
