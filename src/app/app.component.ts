import { Component } from '@angular/core';
import { IPagingInput, ISortInput, CellsInfo } from 'ngx-magic-table';
// import { CellsInfo } from 'ngx-magic-table/lib/models/cells-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public table: Array<CellsInfo> = [
    {
      cellWidth: 600,
      draggble: true,
      index: 0,
      name: 'Numbers',
      parent: '',
      sortable: false,
      visible: true
    },
    {
      cellWidth: 266,
      draggble: false,
      index: 1,
      name: 'Name',
      parent: '',
      sortable: true,
      visible: true
    },
    {
      cellWidth: 150,
      draggble: false,
      index: 2,
      name: 'Id',
      parent: 'Numbers',
      sortable: true,
      visible: true
    },
    {
      cellWidth: 192,
      draggble: false,
      index: 3,
      name: 'Type',
      parent: 'Numbers',
      sortable: true,
      visible: true
    },
    {
      cellWidth: 150,
      draggble: false,
      index: 4,
      name: 'Size',
      parent: 'Numbers',
      sortable: true,
      visible: false
    },
    {
      cellWidth: 210,
      draggble: true,
      index: 5,
      name: 'Phone',
      parent: 'Numbers',
      sortable: true,
      visible: true
    },
    {
      cellWidth: 150,
      draggble: true,
      index: 5,
      name: 'Active',
      parent: '',
      sortable: true,
      visible: true
    }
  ];

  public count: Number = 1;
  public data: Array<any> = [
    {
      Id: '1',
      Name: 'Nabi',
      Phone: '+12 345 678',
      Size: ['small', 'medium', 'large'],
      Type: ['Man', 'Woman'],
      Active: true
    },
    {
      Id: '2',
      Name: 'Noushmac',
      Phone: '+52 221 983',
      Size: ['small', 'medium', 'large', 'x large'],
      Type: ['Man', 'Woman', 'Child'],
      Active: true
    },
    {
      Id: '3',
      Name: 'Kazim',
      Phone: '+80 235 874',
      Size: ['small'],
      Type: ['Man', 'NewBorn'],
      Active: false
    },
    {
      Id: '4',
      Name: 'Davood',
      Phone: '+73 214 365',
      Size: ['small', 'large'],
      Type: ['Man', 'Woman'],
      Active: true
    },
    {
      Id: '5',
      Name: 'Mammad',
      Phone: '+21 332 236',
      Size: ['small', 'large', 'x small'],
      Type: ['Man', 'Woman'],
      Active: true
    },
    {
      Id: '6',
      Name: 'Sarah',
      Phone: '+21 324 236',
      Size: ['small'],
      Type: ['Woman'],
      Active: false
    },
    {
      Id: '7',
      Name: 'Davood',
      Phone: '+73 214 365',
      Size: ['small', 'large'],
      Type: ['Man', 'Woman'],
      Active: true
    },
    {
      Id: '8',
      Name: 'Davood',
      Phone: '+73 214 365',
      Size: ['small', 'large'],
      Type: ['Man', 'Woman']
    }
  ];

  pageChanged() {}

  sortChanged() {}

  getRowClass(data: any): string {
    if (data.Id < 5) {
      return 'rowClass1';
    } else {
      return 'rowClass2';
    }
  }

  saveTable(array: CellsInfo) {
    console.log(array);
  }

  selectChanged(row: any) {
    // alert(JSON.stringify(row));
  }
  pageSizesChange(data: IPagingInput) {
    console.log('page:' + data.page + ' pageSize:' + data.pageSize);
  }
  sortChange(data: ISortInput) {
    console.log('sort:' + data.sort + ' direction:' + data.direction);
  }
  pageChange(data: IPagingInput) {
    console.log('page:' + data.page + ' pageSize:' + data.pageSize);
  }
  columnsArrangeChange(data: any) {
    console.log(data);
  }
  toggleColumnsChange() {
    alert('toggleColumnsChange');
  }
  checkChange(row: any) {
    alert(JSON.stringify(row));
  }
}
