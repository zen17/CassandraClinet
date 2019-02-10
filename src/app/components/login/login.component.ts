import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MongoService} from '../../services/mongo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;

  constructor(private fb: FormBuilder, private mongoService: MongoService) {
  }

  ngOnInit() {
    this.logInForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    const tmp = this.logInForm.getRawValue();
    sessionStorage.setItem('email', tmp.email);
    this
      .mongoService.login({
      email: tmp.email
    }).subscribe(data => {
      console.log(data);
    });
  }
}
