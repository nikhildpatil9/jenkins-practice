import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-position',
  templateUrl: './div-position.component.html',
  styleUrls: ['./div-position.component.scss']
})
export class DivPositionComponent implements OnInit {
  combinationClassNames: any[] = [
    'd-flex parent-div1 jc-start align-start',
    'd-flex parent-div1 jc-end align-start',
    'd-flex parent-div1 jc-center align-start',
    'd-flex parent-div1 jc-bt align-start',
    'd-flex parent-div1 jc-start align-center',
    'd-flex parent-div1 jc-end align-center',
    'd-flex parent-div1 jc-center align-center',
    'd-flex parent-div1 jc-bt align-center',
    'd-flex parent-div1 jc-start align-end',
    'd-flex parent-div1 jc-end align-end',
    'd-flex parent-div1 jc-center align-end',
    'd-flex parent-div1 jc-bt align-end',

  ]
  ImagePath: string= "./div-position/image.png"
  constructor() { }

  ngOnInit(): void {
  }

}    
