import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any[];
  repos: any[];

  constructor(private profileservice:ProfileService) { 

    this.profileservice.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });


    this.profileservice.getprofileRepos().subscribe(repos => {
      console.log(this.repos);
      this.repos = this.repos;
    });


  }

  ngOnInit(): void {
  }

}
