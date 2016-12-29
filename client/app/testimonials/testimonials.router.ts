import { NgModule } from '@angular/core';
import { TestimonialsComponent } from './testimonials.component';
import { Routes, RouterModule } from '@angular/router';

let routes: Routes = [
    { path: 'testimonials', component: TestimonialsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestimonialsRouterModule {  }