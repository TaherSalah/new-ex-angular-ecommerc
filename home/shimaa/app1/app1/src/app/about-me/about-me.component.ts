import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

interface tabel{
  name:string,
  age:number,
  salary:number
}



@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
userName:string='taher';
userAge:number=25;
userGender:string='male';
imgSrc:string='assets/images/240402790_557314218804887_6523148026396916592_n.jpg';
// hello(EventInfo:MouseEvent){
//   console.log(EventInfo.clientY)
// }
welcom(){
  console.log('hello')
}
productPrice:number=5000;
productPr:number=50;

mainStyle:string="bg-danger ; text-center";
secStyle:string="bg-info ; text-end";

user:tabel[]=[{name:'taher', age:25,salary:200000}]



}

