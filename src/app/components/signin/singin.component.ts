import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CassandraService} from '../../services/cassandra.service';
import {MongoService} from '../../services/mongo.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SigninComponent implements OnInit {

  logInForm: FormGroup;

  constructor(private fb: FormBuilder, private mongoService: MongoService) {
  }

  ngOnInit() {
    this.logInForm = this.fb.group({
      email: [''],
      username: [''],
      password: [''],
      firstName: [''],
      lastName: [''],
      picture: ['http://pink-rs.com/media/image/portal-media-d19e6bd0-b178-43f0-6d21-4413f2e1aa9f/720']
    });
  }

  register() {

    const tmp = this.logInForm.getRawValue();
    sessionStorage.setItem('email', tmp.email);
    this
      .mongoService.signIn({
      email: tmp.email,
      username: tmp.username,
      password: tmp.password,
      firstname: tmp.firstName,
      lastname: tmp.lastName,
      slika: tmp.picture
    }).subscribe(data => console.log(data));
  }

}

