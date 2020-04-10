import { Component, OnInit } from '@angular/core';
import { profile } from '../profile'


import { from } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myprofile:profile;

  constructor() { }

  ngOnInit(): void {
  }

}
