import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MongoService} from '../../services/mongo.service';

@Component({
  selector: 'app-post-ads',
  templateUrl: './post-ads.component.html',
  styleUrls: ['./post-ads.component.css']
})
export class PostAdsComponent implements OnInit {
  postAdForm: FormGroup;

  constructor(private fb: FormBuilder, private mongoService: MongoService) {
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
      opis: [''],
      slika: ['']
    });
  }

  save() {
    console.log(sessionStorage.getItem('email'));
    const tmp = this.postAdForm.getRawValue();
    console.log(tmp);
    this.mongoService
      .postAd({
        kategorija: tmp.kategorija.toLowerCase(),
        grupa: tmp.marka.toLowerCase(),
        model: tmp.model.toLowerCase(),
        naslov: tmp.naslov.toLowerCase(),
        stanje: tmp.stanje.toLowerCase(),
        cena: tmp.cena,
        datum: tmp.datum,
        opis: tmp.opis,
        slike: [tmp.slika],
        like: '0',
        user_email: sessionStorage.getItem('email')
      }).subscribe(data => console.log(data));
  }

}
