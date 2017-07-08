import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.scss']
})
export class SearchTextComponent implements OnInit {
  @Output() search = new EventEmitter();
  searchForm: FormGroup
  constructor() { 
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      text: new FormControl(''),
    });
    this.listenForChanges()
  }

  public listenForChanges() {
      this.searchForm.controls['text']
        .valueChanges
        .filter((text: string) => text.length >= 2)
        .subscribe((text) => this.search.emit(text))
  }
}
