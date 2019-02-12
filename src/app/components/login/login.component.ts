import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MongoService} from '../../services/mongo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;

  constructor(private fb: FormBuilder, private mongoService: MongoService,private router:Router ) {
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
    this.router.navigate(['/ads']);
    this
      .mongoService.login({
      email: tmp.email
    }).subscribe(data => {
      console.log(data);
    });
  }
}
