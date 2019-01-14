import {Component, OnInit} from '@angular/core';
import {AdComponent} from '../ad/ad.component';
import {Ad} from '../../models/models';
import {CassandraService} from 'src/app/services/cassandra.service';


@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {

  private ads: any = [];


  constructor(private  cassandraService: CassandraService) {
  }

  ngOnInit() {
    this.cassandraService
      .getUserAds('http://localhost:3001/moji', {user_email: sessionStorage.getItem('email')})
      .subscribe(data => {
        this.ads = data;
      });
  }

  deleteMyAd(value) {
    const tmp = this.ads.forEach(x => {
      if (x.oglas_id === value) {
        return x;
      }
    });
    this.ads = tmp;
  }
}
