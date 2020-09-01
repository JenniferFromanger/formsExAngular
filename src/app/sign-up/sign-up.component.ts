import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  model: User = new User();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    // form submitted
    console.log(this.model);
  }
}
