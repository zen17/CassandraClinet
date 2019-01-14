import {Component, Input, OnInit} from '@angular/core';
import {Ad} from '../../models/models';
import {CassandraService} from 'src/app/services/cassandra.service';
import {Observable} from 'rxjs';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  private ads: Ad[] = [];
  private recomendtaionAds: string[] = [];

  constructor(private cassandraService: CassandraService) {
  }

  ngOnInit() {
    sessionStorage.setItem('email', 'jocicn17@gmail.com');
//    sessionStorage.setItem('like', 'false');
    this.cassandraService.getMainAds()
      .subscribe(data => {
        this.ads = data;
      });
  }


  getCategory(value) {
    this.cassandraService.getCategory({kategorija: value})
      .subscribe(data => {
        this.ads = data;
      });
    console.log(value);
  }

  stampa(value) {
    console.log(value);
  }
}
