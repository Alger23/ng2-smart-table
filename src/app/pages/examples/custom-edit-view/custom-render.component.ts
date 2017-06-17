import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from '../../../../ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class CustomRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
  @Input() columnId: string;
  
  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

}
