import { Component, OnInit } from '@angular/core';
import { from, Observable, of, range } from 'rxjs';

@Component({
  selector: 'app-rxjs-examples',
  templateUrl: './rxjs-examples.component.html',
  styleUrls: ['./rxjs-examples.component.scss']
})
export class RxjsExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const myTestObs = new Observable((observer:any)=>{
    //   observer.next(10)
    //   observer.next(20)
    //   observer.next(50)
    // });

    // console.log(myTestObs) no data without subscribe
    // myTestObs.subscribe(()=>{},()=>{},()=>{})
    // myTestObs.subscribe((result:any)=>{
    //     console.log(result)
    // });

    const arr = [10,30,40,50,10,40];
    // const arrAsObs = from(arr);
    // arrAsObs.subscribe((result:any)=>{
    //   console.log(result)
    // })
    // const arrAsObs = of(...arr);
    // arrAsObs.subscribe((result:any)=>{
    //   console.log(result)
    // })
    const arrAsObs = range(20,10);
    arrAsObs.subscribe((result:any)=>{
      console.log(result)
    })
  }

}
