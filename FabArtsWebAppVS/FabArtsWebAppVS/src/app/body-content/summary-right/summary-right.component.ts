import { Component, OnInit, Input } from '@angular/core';

import { Summary } from '../summary/summary.component';

@Component({
  selector: 'app-summary-right',
  templateUrl: './summary-right.component.html',
  styleUrls: ['./summary-right.component.css']
})
export class SummaryRightComponent implements OnInit {
 path: any = '../../assets/images/2.jpg';

 @Input() summary: Summary;

  constructor() { }

  ngOnInit() {
  }

}
