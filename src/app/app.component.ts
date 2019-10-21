import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map, tap} from 'rxjs/operators';

interface Person{
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrx-tut';

  ngOnInit(){
    // ! using Of
    // const person: Person = {
    //   name: 'david'
    // }

    // const person$ : Observable<Person> = of(person);

    // person$.subscribe(person => console.log(person))

    // ! using map

    const source = of ('david')
      .pipe(
        map(name => name.toUpperCase()),
        tap(name => console.log("he")) // for not modifying the data
      )

    source.subscribe(data => console.log(data)); 
  }
}
