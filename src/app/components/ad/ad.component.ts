import {Component, OnInit, Input} from '@angular/core';
import {Ad} from '../../models/models';
import {CassandraService} from '../../services/cassandra.service';


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

  kliknuto: boolean;
  naziv: string;

  constructor(public cassandraService: CassandraService) {
    this.naziv = 'Like';
  }

  ngOnInit() {
    console.log(this.cena, this.slike, this.naslov,
      this.datum, this.grupa, this.model, this.kategorija, this.lajkovi, this.opis);
  }

  lajkuj() {
    console.log('lajkuj');
    if (!this.kliknuto) {
      this.lajkovi = this.lajkovi + 1;
      this.kliknuto = !this.kliknuto;
      this.naziv = 'Dislike';
      sessionStorage.setItem('like', 'true')
      this.cassandraService.lajkuj('http://localhost:3001/lajkuj-oglas', {
        kategorija: this.kategorija.toLowerCase(),
        model: this.model.toLowerCase(),
        oglas_id: this.oglas_id,
        user_email: this.user_email,
        datum: this.datum,
        opis: this.opis,
        slike: this.slike,
        lajk: this.lajkovi,
        naslov: this.naslov,
        cena: this.cena,
        grupa: this.grupa,
        stanje: this.stanje
      }).subscribe();
    } else {
      this.lajkovi = this.lajkovi - 1;
      this.kliknuto = !this.kliknuto;
      this.naziv = 'Like';
      this.cassandraService.lajkuj('http://localhost:3001/lajkuj-oglas', {
        kategorija: this.kategorija.toLowerCase(),
        model: this.model.toLowerCase(),
        oglas_id: this.oglas_id,
        user_email: this.user_email,
        datum: this.datum,
        opis: this.opis,
        slike: this.slike,
        lajk: this.lajkovi,
        naslov: this.naslov,
        cena: this.cena,
        grupa: this.grupa,
        stanje: this.stanje
      }).subscribe();

    }
  }
}
