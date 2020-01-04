import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.scss']
})

export class ProjectOneComponent implements OnInit {


  public members1: {title: string, url: string}[] = [
    {title: 'Siruthamur Govt School Kanchi', url: 'assets/images/siruthamur/school-building.jpg'},
    {title: 'Discussion with staffs', url: 'assets/images/siruthamur/school-members.jpg'}
  ];

  public members2: {title: string, url: string}[] = [
    {title: 'Old & New Toilet Blocks', url: 'assets/images/siruthamur/toilet-building.jpg'},
    {title: 'LED Lights & Fans', url: 'assets/images/siruthamur/led-bulb.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
