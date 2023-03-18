import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './store/counter.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  current$!: Observable<number>;

  constructor(private store: Store<{ count: number }>){}

  increment() {
    this.store.dispatch(actions.countIncremented())
  }

  decrement() {
    this.store.dispatch(actions.countDecremented())
  }

  ngOnInit(): void {
    this.current$ = this.store.select('count')
  }
}
