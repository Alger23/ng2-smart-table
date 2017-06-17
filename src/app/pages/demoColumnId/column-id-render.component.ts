import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
@Component({
    template: `{{renderColumnId}}: {{renderValue}}`,
})
export class ColumnIdRenderComponent implements ViewCell, OnInit {
    @Input() value: string | number;
    @Input() rowData: any;
    @Input() columnId: string;

    renderValue: any;
    renderColumnId: string;

    ngOnInit() {
        this.renderValue = this.value;
        this.renderColumnId = this.columnId;    
    }
}
