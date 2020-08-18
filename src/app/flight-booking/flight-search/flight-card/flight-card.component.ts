import { Component, OnInit, Input, EventEmitter, Output, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Flight } from 'app/model/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    console.debug('ctor', this.item, this.selected);
  }

  ngOnInit(): void {

    //setTimeout(() => this.selectedChange.next(true), 0);

    console.debug('ngOnInit', this.item, this.selected);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges', this.item, this.selected);
  }

  ngOnDestroy(): void {
    console.debug('ngOnDestroy', this.item, this.selected);
  }

  select() {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

}
