import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
members: Array<string> = [
  'Ruta Borkar',
  'Vishnu Pratap Singh',
  'Mokshada Kothari',
  'Mayank Soni'
];
  constructor() { }

  ngOnInit() {
  }

}
