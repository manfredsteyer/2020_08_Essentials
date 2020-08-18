import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flight-validation-errors',
  templateUrl: './flight-validation-errors.component.html',
  styleUrls: ['./flight-validation-errors.component.css']
})
export class FlightValidationErrorsComponent implements OnInit {

  @Input() errors: object = {};

  constructor() { }

  ngOnInit(): void {
  }

}
