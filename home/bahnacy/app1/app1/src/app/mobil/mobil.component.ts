import { Component, OnInit, Input, OnChanges ,SimpleChanges} from '@angular/core';
import { UserserviceService } from './../userservice.service';
import { User } from '../user';
@Component({
  selector: 'app-mobil',
  templateUrl: './mobil.component.html',
  styleUrls: ['./mobil.component.css']
})
export class MobilComponent implements OnInit {
  mobileUser:User[]=[];
  @Input() childMobile:string='';
  constructor(_UserserviceService:UserserviceService) {
    this.mobileUser=_UserserviceService.users
  }
 ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)

 }
  ngOnInit(): void {
  }

}
