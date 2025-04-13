import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header-sidenav',
  templateUrl: './header-sidenav.component.html',
  styleUrls: ['./header-sidenav.component.scss']
})
export class HeaderSidenavComponent implements OnInit {
  @Output() toggleDrawer = new EventEmitter<any>();
  @Input() toogleBar: boolean = false;
  constructor() { }

  ngOnInit(): void {


  }
  toggle() {
    this.toggleDrawer.emit(!this.toogleBar);
  }

}
