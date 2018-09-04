import { Component, OnInit } from '@angular/core';
import { Summary } from './summary/summary.component';

import { BodyContentService } from './body-content.service';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css'],
  providers: [BodyContentService]
})
export class BodyContentComponent implements OnInit {

  summaryList: Summary[];

  constructor(private bodyContentService: BodyContentService) { }

  ngOnInit() {
    //this.bodyContentService.getSummary().
    //subscribe(summaryList => this.summaryList = summaryList);
    this.bodyContentService.getSummary().
      subscribe(summaryList => this.summaryList = summaryList);
  }

}
