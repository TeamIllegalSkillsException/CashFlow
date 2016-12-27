import {Injectable} from '@angular/core';

@Injectable()
export class SpinnerService {

  private _active: boolean = false;

  constructor() {}

  public get active(): boolean {
    return this._active;
  }

  public show():void {
    this._active = true;
  }

  public hide(delay:number = 0):void {
    setTimeout(() => {
      this._active = false;
    }, delay);
  }
}
