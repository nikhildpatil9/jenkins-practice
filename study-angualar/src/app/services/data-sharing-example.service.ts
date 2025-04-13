import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingExampleService {
  private statusSource = new BehaviorSubject('OFF'); // set default status
  currentStatus = this.statusSource.asObservable();

  constructor() { }

  changeStatus(status: string) {
    this.statusSource.next(status)
  }

}
