import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CassandraService} from '../../services/cassandra.service';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {

  searchForm: FormGroup;
  @Output() searchTerm = new EventEmitter<string>();

  input$: Observable<any>;

  constructor(private cassandraService: CassandraService, private  fb: FormBuilder) {
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
