import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {MongoService} from '../../services/mongo.service';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {

  searchForm: FormGroup;
  @Output() searchTerm = new EventEmitter<string>();

  input$: Observable<any>;

  constructor(private mongoService: MongoService, private  fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit() {
    this.searchForm.get('search').valueChanges
      .pipe(
        debounceTime(1000),
      ).subscribe(value => {
        this.searchTerm.emit(value.toLowerCase() );
      });
  }

}
