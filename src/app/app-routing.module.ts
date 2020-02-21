import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpcreateComponent } from './empcreate/empcreate.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { ReactComponent } from './react/react.component';
import { ViewComponent } from './comp/view/view.component';
import { ParentComponent } from './sibling/parent/parent.component';
import { ChildComponent } from './sibling/child/child.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'empcreate'},
  {path:'create', component:EmpcreateComponent},
  {path:'list', component:EmplistComponent},
  {path:'react', component:ReactComponent},
  {path:'edit/:id', component:EmpeditComponent},
  {path:'view', component:ViewComponent},
  {path:'parent', component:ParentComponent},
  {path:'child', component:ChildComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
