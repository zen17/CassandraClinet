import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Ad} from '../../models/models';
import {MongoService} from '../../services/mongo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit, Ad {
  @Input() kategorija: string;
  @Input() grupa: string;
  @Input() model: string;
  @Input() naslov: string;
  @Input() stanje: string;
  @Input() slike: string[] = [];
  @Input() opis: string;
  @Input() oglas_id: string;
  @Input() lajkovi: number;
  @Input() cena: number;
  @Input() datum: string;
  @Input() user_email: string;

  @Output() addDetails = new EventEmitter();

  kliknuto: boolean;
  naziv: string;

  constructor(public mongoService: MongoService, private  router: Router) {
    this.naziv = 'Like';
  }

  ngOnInit() {
    console.log('Ad:', this.oglas_id, this.cena, this.slike, this.naslov,
      this.datum, this.grupa, this.model, this.kategorija, this.lajkovi, this.opis);
  }

  lajkuj() {
    console.log('lajkuj');
    if (!this.kliknuto) {
      this.lajkovi = this.lajkovi + 1;
      this.kliknuto = !this.kliknuto;
      this.naziv = 'Dislike';
      sessionStorage.setItem('like', 'true');
      this.mongoService.likeAd({
        user_email: sessionStorage.getItem('email'),
        oglas_id: this.oglas_id
      }).subscribe();
    } else {
      this.lajkovi = this.lajkovi - 1;
      this.kliknuto = !this.kliknuto;
      this.naziv = 'Like';
      this.mongoService.likeAd({
        user_email: sessionStorage.getItem('email'),
        oglas_id: this.oglas_id
      }).subscribe();
    }
  }


  redirect() {
    let tmp = '/details/'+ this.oglas_id;
    this.router.navigate([tmp])
  }
}
