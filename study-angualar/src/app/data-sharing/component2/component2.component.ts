import { Component, OnInit } from '@angular/core';
import { DataSharingExampleService } from 'src/app/services/data-sharing-example.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  status:string | undefined;


  constructor(private dataSharingExampleService:DataSharingExampleService) {
    
   }

  ngOnInit(): void {
    this.dataSharingExampleService.currentStatus.subscribe(status =>{
      this.status = status
      console.log("data changed in Component2Component ")
    } )
  }
  changeStatus(){
    this.dataSharingExampleService.changeStatus("Component2Component")
  }
}
