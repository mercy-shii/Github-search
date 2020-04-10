import { Component, OnInit } from '@angular/core';
import { profile } from '../profile'
import { ProfileComponent } from '../profile/profile.component';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myprofile:profile= new profile("",0,0,0,"")
  

  constructor() { }

  ngOnInit(): void {
  }

}
