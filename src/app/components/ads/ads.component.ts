import {Component, Input, OnInit} from '@angular/core';
import {Ad} from '../../models/models';
import {CassandraService} from 'src/app/services/cassandra.service';
import {Observable} from 'rxjs';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  private ads: Ad[] = [];
  private liked: string[] = [];
  private recomendtaionAds: string[] = [];
  private associatedUser: any[] = [];

  constructor(private cassandraService: CassandraService) {
  }

  ngOnInit() {
    this.cassandraService.getMainAds()
      .subscribe(data => {
        this.ads = data;

        this.cassandraService
          .getUserAds('http://localhost:3001/lajkovani', {user_email: sessionStorage.getItem('email')})
          .subscribe(tmp => {
            this.liked = tmp.map(t => t.oglas_id);
            this.liked.forEach(ad => {
              this.associatedUser.push(
                this.cassandraService
                  .getUserAds('http://localhost:3001/povezani', {oglas_id: ad}));
            });
          });

      });
  }

  checkLiked(tmp: Ad[], oglas) {

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
