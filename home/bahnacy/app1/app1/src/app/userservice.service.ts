import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users: User [] = [
    { name:'mohameed' , age:25 , salary:20000 , dateOfBirth:'20/10/2022' },
    { name:'seaid' , age:25 , salary:20000 , dateOfBirth:'20/10/2022' },
    { name:'taher' , age:25 , salary:20000 , dateOfBirth:'20/10/2022' },
    { name:'taher' , age:25 , salary:20000 , dateOfBirth:'20/10/2022' },
    { name:'taher' , age:25 , salary:20000 , dateOfBirth:'20/10/2022' },
    { name:'taher' , age:25 , salary:20000 , dateOfBirth:'20/10/2022' },
    { name:'taher' , age:25 , salary:20000 , dateOfBirth:'20/10/2022' },
    { name:'taher' , age:25 , salary:20000 , dateOfBirth:'20/10/2022' },
    { name:'taher' , age:25 , salary:20000 , dateOfBirth:'20/10/2022' },
    { name:'taher' , age:25 , salary:20000 , dateOfBirth:'20/10/2022' },
  ]
  constructor() {

  }
}
