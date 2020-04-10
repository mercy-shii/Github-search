import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  

  private username: string;
  private clientid = '60660187';
  private clientsecret ='dac068760c34b41ba8348d630f772fe10947f8c7';

  constructor(private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'mercy-shii'
  }

  getProfileInfo(user):any{
    return this.http.get("https://api.github.com/users/" +  user)
   }


  getprofileRepos(repos){
    return this.http.get("https://api.github.com/users/mercy-shii" + repos);
  
  }

  updateProfile(username:string){
    this.username =username  }
}
