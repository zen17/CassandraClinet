import {Component, Input, OnInit, Output} from '@angular/core';
import {CassandraService} from '../../services/cassandra.service';
import {EventEmitter} from '@angular/core';
import {OuterSubscriber} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-my-ad',
  templateUrl: './my-ad.component.html',
  styleUrls: ['./my-ad.component.css']
})
export class MyAdComponent implements OnInit {

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

  @Output() deleteMyAd = new EventEmitter<string>();

  constructor(private cassandraService: CassandraService) {
  }

  ngOnInit() {
  }

  deleteAd() {
      this.cassandraService.deleteAd('http://localhost:3001/delete', {
        datum: this.datum,
        kategorija: this.kategorija,
        oglas_id: this.oglas_id,
        model: this.model,
        user_email: this.user_email
      }).subscribe(data => {
        this.deleteMyAd.emit(this.oglas_id);
        console.log(data);
      });
  }
}
