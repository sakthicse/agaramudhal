import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-approvals-and-registration',
  templateUrl: './approvals-and-registration.component.html',
  styleUrls: ['./approvals-and-registration.component.scss']
})
export class ApprovalsAndRegistrationComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  public goBack() {
    this.location.back();
  }


}
