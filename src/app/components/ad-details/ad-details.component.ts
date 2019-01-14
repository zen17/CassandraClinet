import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit {

  @Input() kategorija: string;
  @Input() grupa: string;
  @Input() model: string;
  @Input() naslov: string;
  @Input() stanje: string;
  @Input() slike: string[];
  @Input() opis: string;
  @Input() oglas: string;
  @Input() lajkovi: number;
  @Input() cena: number;
  @Input() datum: string;
  @Input()user_id: string;

  constructor() { }

  ngOnInit() {
  }

}
