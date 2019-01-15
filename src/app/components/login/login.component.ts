import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Ad} from '../../models/models';
import {CassandraService} from '../../services/cassandra.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;

  constructor(private fb: FormBuilder, private cassandraService: CassandraService) {
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
      .cassandraService.login({
      email: tmp.email
    }).subscribe(data => {
      console.log(data);
    });
  }
}
