import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationState, selectCurrent } from 'src/app/store/reducers';
import * as actions from '../../../app/store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{

 

  current$!: Observable<number>;

  constructor(private store: Store<ApplicationState>){}

  increment() {
    this.store.dispatch(actions.countIncremented())
  }

  decrement() {
    this.store.dispatch(actions.countDecremented())
  }

  ngOnInit(): void {
    this.current$ = this.store.select(selectCurrent)
  }
}
