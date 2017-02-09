import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';
import { FooComponent } from './foo.component';

@NgModule({
  imports:      [
    UIRouterModule.forChild({ states: [
      {
        name: 'foo',
        url: '/foo',
        component: FooComponent
      }
    ]}),
  ],
  declarations: [FooComponent, FooComponent],
  exports: [],
  providers: [],
})
export class FooModule { }
