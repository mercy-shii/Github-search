import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { profile } from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myprofile: profile;
  repos: any[];
  username: string;

  constructor(private profileservice:ProfileService) { 

  }

  findProfile(user){
    //this.profileservice.updateProfile(this.username);
    this.profileservice.getProfileInfo(user).subscribe(profile => {
      console.log(profile);
      this.myprofile = profile;
    });


    this.profileservice.getprofileRepos().subscribe(repos => {
      console.log(this.repos);
      this.repos = this.repos;
    });
  }

  ngOnInit(): void {
    this.findProfile("mercy-shii")
  }

}
