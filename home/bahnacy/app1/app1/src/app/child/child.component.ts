import { Component, Input, OnInit, Output , EventEmitter ,OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input () ayhaga:string='';

  constructor() {}



ngOnChanges(changes: SimpleChanges): void {
console.log(changes)

}

  ngOnInit(): void {
  }

}
