import ArrayStore from 'devextreme/data/array_store';
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

  store: ArrayStore;
  dataSource: DataSource;
  @ViewChild('gridDepp', { static: false }) dxDataGrid: DxDataGridComponent;

  ngOnInit() {
    let arr: IDepp[] = [];
    for (let i = 0; i < 1300; i++) {
      arr.push({
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
    this.store = new ArrayStore({
      data: arr,
      key: 'depp',
    });
    this.dataSource = new DataSource({
      store: this.store,
    });
  }

  gridDepp_change(x: any, field: string) {
    //console.log("gridDepp_change", x);
  }

  clickme(x: any) {
    //console.log("click me", x);
  }

  clicking($event: any, flag: string): void {
    this.dataSource.items().forEach((ele: any) => {
      ele[flag] = $event.value;
    });
  }
}
