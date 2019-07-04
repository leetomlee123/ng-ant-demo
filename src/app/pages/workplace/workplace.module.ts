import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkplaceComponent} from './workplace.component';
import {WorkplaceRoutingModule} from './workplace-routing.module';

@NgModule({
  declarations: [WorkplaceComponent],
  imports: [
    CommonModule, WorkplaceRoutingModule
  ],
  exports: [WorkplaceComponent]
})
export class WorkplaceModule {
}
