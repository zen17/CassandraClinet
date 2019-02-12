import {Component, Input, OnInit} from '@angular/core';
import {MongoService} from '../../services/mongo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit {


  private _id: string;
  private comments: any[] = [];
  private naslov;
  private slike: string[] = [];
  private grupa;
  private cena;
  private stanje;
  private korisink;
  private model;
  private opis;

  constructor(private mongoService: MongoService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._id = params.get('id');
      const body = {
        oglas_id: this._id,
      };
      this.mongoService.getAd({id: this._id})
        .subscribe(data => {
            this.slike = data.slike;
            this.naslov = data.naslov;
            this.korisink = data.user_email;
            this.model = data.model;
            this.cena = data.cena;
            this.stanje = data.stanje;
            this.opis = data.opis;
          }
        );
      this.mongoService.getComments(body).subscribe(data => {
        if(data!==null || data!== undefined)
        this.comments = data.komentari;
      });
    });
  }

  dodajKomentar(data) {
    const comment = {
      user_email: sessionStorage.getItem('email'),
      text: data.value
    };
    this.comments.push(comment);
    const body = {
      user_email: sessionStorage.getItem('email'),
      oglas_id: this._id,
      text: data.value
    };

    this.mongoService.commentAd(body).subscribe();

  }

}
