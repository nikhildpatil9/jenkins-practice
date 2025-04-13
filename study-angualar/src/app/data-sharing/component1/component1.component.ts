import { Component, OnInit } from '@angular/core';
import { DataSharingExampleService } from 'src/app/services/data-sharing-example.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  status:string | undefined;


  constructor(private dataSharingExampleService:DataSharingExampleService) { }

  ngOnInit(): void {
    this.dataSharingExampleService.currentStatus.subscribe(status =>{
      this.status = status
      console.log("data changed in Component1Component ")
    } )
  }
  changeStatus(){
    this.dataSharingExampleService.changeStatus("Component1Component")
  }
}
