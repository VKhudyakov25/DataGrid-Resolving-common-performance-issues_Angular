import { DxDataGridComponent } from 'devextreme-angular';
import { Component, ViewChild, OnInit } from '@angular/core';

import { IDepp, AppService } from './app.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent implements OnInit {
  constructor() {}

  store: IDepp[];
  @ViewChild('gridDepp', { static: false }) dxDataGrid: DxDataGridComponent;

  ngOnInit() {
    this.store = new Array<IDepp>();
    for (let i = 0; i < 1300; i++) {
      this.store.push({
        depp: ('0000' + i.toString()).substring(-4),
        descr: 'store ' + i.toString(),
        flag1: true,
        flag2: false,
        flag3: true,
        flag4: false,
        flag5: true,
        flag6: false,
        flag7: true,
      });
    }
  }

  gridDepp_change(x: any, field: string) {
    //console.log("gridDepp_change", x);
  }

  clickme(x: any) {
    //console.log("click me", x);
  }

  clicking($event: any, flag: string): void {
    this.store.forEach((ele: any) => {
      ele[flag] = $event.value;
    });
  }
}
