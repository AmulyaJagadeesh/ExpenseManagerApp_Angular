import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeComponent } from './type/type.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/types', pathMatch: 'full' },
  { path: 'types', component: TypeComponent } ,
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [TypeComponent, PageNotFoundComponent]
