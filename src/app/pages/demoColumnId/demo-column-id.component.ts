import { ColumnIdRenderComponent } from './column-id-render.component';
import { Component } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'demo-column-id',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class DemoColumnIdComponent {

  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
        type: 'custom',
        renderComponent: ColumnIdRenderComponent,
      },
      username: {
        title: 'User Name',
        valuePrepareFunction: (value, row, columnId) => {
          return `${columnId}: ${value}`;
        },
      },
      email: {
        title: 'Email',
      },
    },
  };
  
  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    // ... other rows here
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
  ];
}
