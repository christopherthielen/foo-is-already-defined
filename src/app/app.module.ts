import { LocationStrategy, PathLocationStrategy, Location } from '@angular/common';
import { SystemJsNgModuleLoader, NgModuleFactoryLoader, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule, UIRouter } from 'ui-router-ng2';

import { FooModule } from './foo/foo.module';
import { BarModule } from './bar/bar.module';
import { AppComponent } from './app.component';

export function uiRouterConfigFn(router: UIRouter) {
  router.urlService.rules.otherwise({ state: 'foo' });
  router.stateRegistry.root();
}

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      useHash: false,
      config: uiRouterConfigFn,
    }),

    FooModule,
    BarModule,
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    { provide: Location, useClass: Location },
  ],
})
export class AppModule {}
