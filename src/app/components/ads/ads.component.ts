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
        this.ads = data;
      });
  }

  getCategory(value) {
    this.mongoService.serachCategory({kategorija: value})
      .subscribe(data => {
        this.ads = data;
      });
    console.log(value);
  }
}
