import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MagicModule} from "./magic/magic.core.module";
import {AppComponent} from "./app.component";
import {DynamicModule} from "ng-dynamic-component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ComponentsList} from "./ComponentList";
import {ThemeModule} from "./magic/src/ui/theme/theme.module";
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {CalendarModule} from 'primeng/components/calendar/calendar';

const comps = ComponentsList.getAllComponents();

@NgModule({
   declarations: [AppComponent, ...comps],
   imports     : [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      InfiniteScrollModule,
      DynamicModule.withComponents(comps),
      MagicModule.forRoot(),
      CalendarModule,

      ThemeModule,
   ],
   exports     : [FormsModule, ReactiveFormsModule, InfiniteScrollModule],
   providers   : [],

   bootstrap: [AppComponent]
})
export class AppModule
{
   constructor() {}
}
