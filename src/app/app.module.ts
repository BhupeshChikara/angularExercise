import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { DirectivesComponent } from './directives/directives.component';
import { InnerTextDirective } from './inner-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    EventBindingComponent,
    ParentComponent,
    ChildComponent,
    DirectivesComponent,
    InnerTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
