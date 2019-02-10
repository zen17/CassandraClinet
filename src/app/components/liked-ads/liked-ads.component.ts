import {Component, OnInit} from '@angular/core';
import {Ad} from '../../models/models';
import {CassandraService} from '../../services/cassandra.service';
import {MongoService} from '../../services/mongo.service';

@Component({
  selector: 'app-liked-ads',
  templateUrl: './liked-ads.component.html',
  styleUrls: ['./liked-ads.component.css']
})
export class LikedAdsComponent implements OnInit {

  private ads: Ad[] = [];

  constructor(private  mongoService: MongoService) {
  }

  ngOnInit() {
    this.mongoService
      .getLikedAds({user_email: sessionStorage.getItem('email')})
      .subscribe(data => {
        this.ads = data;
        console.log(sessionStorage.getItem('email'));
        console.log(data);
      });
  }

}
