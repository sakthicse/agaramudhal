import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-two',
  templateUrl: './project-two.component.html',
  styleUrls: ['./project-two.component.scss']
})

export class ProjectTwoComponent implements OnInit {

  public members1: {title: string, url: string}[] = [
    {title: 'Velampalayam Govt School Namakkal', url: 'assets/images/velampalayam/school-building.png'},
    {title: 'Shield As Memorandum', url: 'assets/images/velampalayam/shield.png'}
  ];

  public members2: {title: string, url: string}[] = [
    {title: 'UV Filter Donation', url: 'assets/images/velampalayam/donation.png'},
    {title: 'School Students', url: 'assets/images/velampalayam/students.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
