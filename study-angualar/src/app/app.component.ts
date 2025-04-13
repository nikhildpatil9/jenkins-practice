import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  route?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Div styling',
    children: [{ name: 'vertical-horizontal-position', route: "div-position" }, { name: 'api-service', route: "api-service-setting" }, { name: 'table-with-expansion', route: "table-with-expansion" }],
  },
  {
    name: 'Data share and imp Links',
    children: [
      { name: 'data-sharing', route: "data-sharing" }, { name: 'important-links', route: "important-links" }
    ],
  },
    {
    name: 'forms and chart js',
    children: [
      { name: 'chart-integration', route: "chart-integration" }, { name: 'form-handling', route: "form-handling" }
    ],
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
  showFiller:boolean = false;
  title = 'study-angualar';
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();



  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  constructor() {
    console.log('executed constructor in app.component.ts.');
    this.dataSource.data = TREE_DATA;

  }

  toggle(value: boolean) {
    this.showFiller = value
  }
  ngOnInit(): void {
    console.log('executed ngOnInit in app.component.ts.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('executed ngOnChanges in app.component.ts.');
  }
  ngOnDestroy(): void {
    console.log('executed ngOnDestroy in app.component.ts.');
  }
  ngDoCheck(): void {
    console.log('executed ngDoCheck in app.component.ts.');
  }
  ngAfterViewInit(): void {
    console.log('executed ngAfterViewInit in app.component.ts.');
  }
  ngAfterContentInit(): void {
    console.log('executed ngAfterContentInit in app.component.ts.');
  }
  ngAfterViewChecked(): void {
    console.log('executed ngAfterViewChecked in app.component.ts.');
  }
  ngAfterContentChecked(): void {
    console.log('executed ngAfterContentChecked in app.component.ts.');
  }

}
