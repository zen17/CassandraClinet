import {Component, Input, OnInit} from '@angular/core';
import {Ad} from '../../models/models';
import {MongoService} from '../../services/mongo.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  private ads: Ad[] = [];

  constructor(private mongoService: MongoService) {
  }

  ngOnInit() {
    this.mongoService.getMainAds()
      .subscribe(data => {
        console.log('getMainAds: ',data);
        this.ads = data;
      });
  }

  getCategory(value) {
    this.mongoService.searachCategory({kategorija: value})
      .subscribe(data => {
        console.log('searachCategory', data);
        this.ads = data;
      });
  }
}
