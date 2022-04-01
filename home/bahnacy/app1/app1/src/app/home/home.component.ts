import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

programing:string='ahme';
proNAme:number=500
homeUser:User[]=[];
inputData:string='mohmeed';

  // user:Users[]=[
  //   {name:'taher',age:25,salary:2000,Date:2020},
  //   {name:'taher',age:25,salary:2000,Date:2020},
  //   {name:'hh',age:25,salary:2000,Date:2020},
  //   {name:'maoin',age:25,salary:2000,Date:2020},
  //   {name:'taher',age:25,salary:2000,Date:2020},
  //   {name:'taher',age:25,salary:2000,Date:2020}
  //   ]
  // imgSrc:string="../../assets/images/244663512_584127566123552_7704028131542912722_n.jpg";
  // imgSrc2:string="../../assets/images/240402790_557314218804887_6523148026396916592_n.jpg";
  // proNum:number=555;

  // frinds:string[]=['taher' , 'mohmame' , 'mohmame' , 'mohmame', 'mohmame' ,  'mohmame' ]



  constructor(_UserserviceService:UserserviceService) {

    this.homeUser=_UserserviceService.users;

  }

  ngOnInit(): void {
  }

}
// function setPassword<x>(passwors:x):x{
//   return passwors
// }

// console.log(setPassword<number>(55555));
// console.log(setPassword<string>('athwer'));
// console.log(setPassword<boolean>(false));
// console.log(setPassword<any>(555555555));
// console.log(setPassword<undefined>(undefined));
// class Persone
// {
//   constructor( name:string , age:number ){
//     console.log('hello constractor');
//   }
//   hello(name:string , salary:number){
//     console.log('hejjo')
//   }
// };

// class  engineer extends Persone {
//    depart:string='';
//   univeristy:string='';
//   yearsStudy:number=0;
//   constructor( name:string , age:number , depart:string , univeristy:string , yearsStudy:number){
//     super(name,age);
//     this.depart=depart;
//     this.univeristy=univeristy;
//     this.yearsStudy=yearsStudy;
//   }

// }

// let p1 = new engineer('taher', 55,'clivi', 'cairo',2022);

// let p2 = new Persone('taher', 55,);

// p1.hello('taher' ,52222222)

// console.log(p1)
// console.log(p2)









