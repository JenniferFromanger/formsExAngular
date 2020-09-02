import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { isRequiredValidator } from '../validators/is-required-validator';
import { rangeDateValidator } from '../validators/range-date-validator';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  minDate: number = 1900;
  maxDate: number = 2020;
  movieForm = this.formBuilder.group({
    titleId: this.formBuilder.group(
      {
        id: [''],
        title: [''],
      },
      // FormGroup validator
      { validator: isRequiredValidator('id', 'title') }
    ),
    type: ['série'],
    releaseYear: [
      '',
      [Validators.required, rangeDateValidator(this.minDate, this.maxDate)],
    ],
    fiche: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.movieForm.patchValue({
      fiche: 'courte',
    });
  }

  onSubmit() {
    console.log('movieForm submitted : ', this.movieForm.value);
  }
}
