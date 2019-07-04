import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonitorComponent} from './monitor.component';
import {MonitorRoutingModule} from './monitor-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [MonitorComponent],
  imports: [
    CommonModule, MonitorRoutingModule, NgZorroAntdModule
  ],
  exports: [MonitorComponent]
})
export class MonitorModule {

}
