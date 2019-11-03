import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tax-benefits',
  templateUrl: './tax-benefits.component.html',
  styleUrls: ['./tax-benefits.component.scss']
})
export class TaxBenefitsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  public goBack() {
    this.location.back();
  }

}
