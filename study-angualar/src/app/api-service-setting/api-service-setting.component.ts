import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-api-service-setting',
  templateUrl: './api-service-setting.component.html',
  styleUrls: ['./api-service-setting.component.scss']
})
export class ApiServiceSettingComponent implements OnInit, OnDestroy {
  suscribtions: Subscription[] = [];
  constructor(private httpRequestService: HttpRequestService) { }


  ngOnInit(): void {
  }
  hitApi() {
    this.suscribtions.push(
      this.httpRequestService.hitPostAPI().subscribe({
        error: (error) => {

        }, next: (next) => {

        }, complete: () => {

        }
      }))

  }
  ngOnDestroy(): void {
    this.suscribtions.forEach((x) => x.unsubscribe())
  }
}
