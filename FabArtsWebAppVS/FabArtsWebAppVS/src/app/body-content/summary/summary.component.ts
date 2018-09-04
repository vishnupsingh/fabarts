import { Component, OnInit, Input   } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
 // path: any = '../../assets/images/2.jpg';

 @Input() summary: Summary;
 constructor() { }
  ngOnInit() {
  }

}

export class Summary {
  heading: string;
  summaryText: string;
  imagePath: string;
  constructor(heading: string, imagePath: string, summaryText: string) {
  this.heading = heading;
  this.imagePath = imagePath;
  this.summaryText = summaryText;
  }
}


