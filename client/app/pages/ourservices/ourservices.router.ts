import { NgModule } from '@angular/core';
import { OurservicesComponent } from './ourservices.component';
import { Routes, RouterModule } from '@angular/router';

let routes: Routes = [
    { path: 'services', component: OurservicesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OurServicesRouterModule {  }