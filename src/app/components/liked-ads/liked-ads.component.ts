import {Component, OnInit} from '@angular/core';
import {Ad} from '../../models/models';
import {CassandraService} from '../../services/cassandra.service';

@Component({
  selector: 'app-liked-ads',
  templateUrl: './liked-ads.component.html',
  styleUrls: ['./liked-ads.component.css']
})
export class LikedAdsComponent implements OnInit {

  private ads: Ad[] = [];

  constructor(private  cassandraService: CassandraService) {
  }

  ngOnInit() {
    this.cassandraService
      .getUserAds('http://localhost:3001/lajkovani', {user_email: sessionStorage.getItem('email')})
      .subscribe(data => {
        this.ads = data;
      });
  }

}
