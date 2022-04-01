import {   Component ,OnDestroy,  OnInit    } from '@angular/core';
import { NewsService } from './../news.service';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';



@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit , OnDestroy  {
  articalsNews: any []=[];
  constructor() {
  }

  ngOnInit(): void {

  }

ngOnDestroy(): void {
 console.log('heloo destroy')
}
}
