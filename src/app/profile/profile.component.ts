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
  username: string;

  constructor(private profileservice:ProfileService) { 

  }

  findProfile(){
    this.profileservice.updateProfile(this.username);
    this.profileservice.getProfileInfo().subscribe(data => {
      console.log(data);
      this.profile = data;
    });


    this.profileservice.getprofileRepos().subscribe(repos => {
      console.log(this.repos);
      this.repos = this.repos;
    });
  }

  ngOnInit(): void {
  }

}
