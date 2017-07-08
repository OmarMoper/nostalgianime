import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-year',
  templateUrl: './search-year.component.html',
  styleUrls: ['./search-year.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchYearComponent implements OnInit {

  year
  yearEmpty = null;
  constructor(private route: Router) { 
  }

  ngOnInit() {
  }

  public onYearSelect($event) {
      this.year = $event;
      this.goSearchByYear();
  }

  public goSearchByYear() {
      if (this.year != null) {
          this.route.navigateByUrl('explore?year='+ this.year)
      }
      else {
          this.yearEmpty = true
      }
  }
}
