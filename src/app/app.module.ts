import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { EmplistComponent } from './emplist/emplist.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactComponent } from './react/react.component';
import { EmdetailsComponent } from './comp/emdetails/emdetails.component';
import { EmlistComponent } from './comp/emlist/emlist.component';
import { ViewComponent } from './comp/view/view.component';
import { ParentComponent } from './sibling/parent/parent.component';
import { ChildComponent } from './sibling/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpcreateComponent,
    EmpeditComponent,
    EmplistComponent,
    HeaderComponent,
    ReactComponent,
    EmdetailsComponent,
    EmlistComponent,
    ViewComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
