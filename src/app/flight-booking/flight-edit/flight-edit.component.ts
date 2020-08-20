import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateCity } from '../../shared/validators/reactive-city-validator';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight-search/flight.service';

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  formGroup: FormGroup;
  metaData: any[];

  id: string;
  showDetails: string;

  error: string;

  constructor(
    private router: Router,
    private flightService: FlightService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {

      // this.route.snapshot.params['showDetails'];

      this.route.params.subscribe(p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];

        this.load(this.id);
      });

    // Metadata for dynamic form
    // See commented out section in template too
    // this.metaData = [
    //   { name: 'id' },
    //   { name: 'from' },
    //   { name: 'to' },
    //   { name: 'date' },
    //   { name: 'delayed', type: 'checkbox' },
    // ];

    this.formGroup = fb.group({
      id: [],
      from: [
        'Graz',
        [
          Validators.required,
          Validators.minLength(3),
          validateCity(['Graz', 'Hamburg', 'Zürich'])
        ]
      ],
      to: ['Hamburg'],
      date: [],
      delayed: []
    });

    this.formGroup.valueChanges.subscribe(value => {
      console.info('form', value);
    });

    this.formGroup.controls['from'].valueChanges.subscribe(value => {
      console.info('from', value);
    });
  }

  load(id: string) {
    this.flightService.findById(id).subscribe(
      flight => this.formGroup.patchValue(flight)
    );
  }

  save() {
    const flight = this.formGroup.value;
    this.flightService.save(flight).subscribe(
      savedFlight => {
        this.formGroup.patchValue(savedFlight);
        this.error = '';
      },
      err => {
        this.error = err.error;
      }
    );
  }

  ngOnInit(): void {
  }
}
