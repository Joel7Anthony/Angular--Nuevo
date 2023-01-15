import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    //PagesRoutingModule,
  ],
  exports:[
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
  ]
})
export class PagesModuleModule { };
