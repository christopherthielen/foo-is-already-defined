import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from 'ui-router-ng2';
import { BarComponent } from './bar.component';
import { FooModule } from '../foo/foo.module';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: [
      {
        name: 'bar',
        url: '/bar',
        component: BarComponent
      }
    ]}),

    FooModule,
  ],
  declarations: [BarComponent, BarComponent],
  exports: [],
  providers: [],
})
export class BarModule { }
