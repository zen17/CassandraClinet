import {Component, OnInit} from '@angular/core';
import {MongoService} from '../../services/mongo.service';


@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {

  private ads: any = [];

  constructor(private  mongoService: MongoService) {
  }

  ngOnInit() {
    this.mongoService
      .getMyAds({user_email: sessionStorage.getItem('email')})
      .subscribe(data => {
        console.log('', data);
        this.ads = data;
      });
  }

  deleteMyAd(value) {
    console.log(value);
    console.log('Moji', this.ads);
    const tmp = this.ads.filter(x => {
      if (x._id !== value) {
        return x;
      }
    });
    console.log(tmp);
    this.ads = tmp;
  }
}
