import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-three',
  templateUrl: './project-three.component.html',
  styleUrls: ['./project-three.component.scss']
})

export class ProjectThreeComponent implements OnInit {

  public members1: {title: string, url: string}[] = [
    {title: 'Singililan Kombai Govt School Namakkal', url: 'assets/images/Singililan Kombai/school-building.png'},
    {title: 'School Prayer', url: 'assets/images/Singililan Kombai/students.png'}
  ];

  public members2: {title: string, url: string}[] = [
    {title: 'UV Water Filter', url: 'assets/images/Singililan Kombai/water-filter.png'},
    {title: 'Renovated Block', url: 'assets/images/Singililan Kombai/newly-constructed-block.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
