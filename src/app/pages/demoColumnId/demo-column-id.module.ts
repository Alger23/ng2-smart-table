import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './demo-column-id.routes';
import { DemoColumnIdComponent } from './demo-column-id.component';
import { Ng2SmartTableModule } from '../../../ng2-smart-table';
import { ColumnIdRenderComponent } from './column-id-render.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,
  ],
  declarations: [
    DemoColumnIdComponent,
    ColumnIdRenderComponent,
  ],
  entryComponents: [
    ColumnIdRenderComponent,
  ],
})
export class DemoColumnIdModule { }
