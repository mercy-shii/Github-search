import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/Operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: 'string';
  private clientid = '60660187';
  private clientsecret ='dac068760c34b41ba8348d630f772fe10947f8c7';

  constructor(private http:Http) { }
}
