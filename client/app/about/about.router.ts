import { NgModule } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { Routes, RouterModule } from '@angular/router';

let routes: Routes = [
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRouterModule {  }
