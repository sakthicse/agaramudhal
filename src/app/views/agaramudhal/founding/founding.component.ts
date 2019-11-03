import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-founding',
  templateUrl: './founding.component.html',
  styleUrls: ['./founding.component.scss']
})
export class FoundingComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  public goBack() {
    this.location.back();
  }

}
