import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from './../user';
@Component({
  selector: 'app-webr',
  templateUrl: './webr.component.html',
  styleUrls: ['./webr.component.css']
})
export class WebrComponent implements OnInit {
  webUser:User[]=[];
  constructor(_UserserviceService:UserserviceService) {
    this.webUser=_UserserviceService.users
   }

  ngOnInit(): void {
  }

}
