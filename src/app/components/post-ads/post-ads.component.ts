import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Ad} from '../../models/models';
import {CassandraService} from '../../services/cassandra.service';

@Component({
  selector: 'app-post-ads',
  templateUrl: './post-ads.component.html',
  styleUrls: ['./post-ads.component.css']
})
export class PostAdsComponent implements OnInit {
  postAdForm: FormGroup;

  constructor(private fb: FormBuilder, private cassandraService: CassandraService) {
  }

  ngOnInit() {

    this.postAdForm = this.fb.group({
      kategorija: [''],
      marka: [''],
      model: [''],
      naslov: [''],
      stanje: [''],
      cena: [''],
      datum: [''],
      opis: ['']
    });
  }

  save() {
    console.log(sessionStorage.getItem('email'));
    const tmp = this.postAdForm.getRawValue();
    console.log(tmp);
    this.cassandraService
      .postAds('http://localhost:3001/insert', {
        kategorija: tmp.kategorija.toLowerCase(),
        grupa: tmp.marka.toLowerCase(),
        model: tmp.model.toLowerCase(),
        naslov: tmp.naslov.toLowerCase(),
        stanje: tmp.stanje.toLowerCase(),
        cena: tmp.cena,
        datum: tmp.datum,
        opis: tmp.opis,
        slike: ['https://www.autoexclusive.rs/chest/strane/najprodavaniji-automobili-svih-vremena/' +
        'muski-magazin-automobili-najprodavaniji-automobili-svih-vremena%20(99).jpg'],
        like: '0',
        user_email: sessionStorage.getItem('email')
      }).subscribe(data => console.log(data));
  }

}
