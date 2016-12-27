import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";

@Injectable()
export class SpinnerService {
  isLoading$: Observable<boolean>;
  private boolSubject: Subject<boolean>;

  constructor() {
    this.boolSubject = new Subject<boolean>();
    this.isLoading$ = this.boolSubject.asObservable();
  }

  public show() {
    this.boolSubject.next(true);
  }

  public hide(delay:number = 0):void {
    setTimeout(() => {
      this.boolSubject.next(false);
    }, delay);
  }
}
