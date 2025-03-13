import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TollywoodComponent } from './tollywood/tollywood.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';

export const routes: Routes = [
  { path: 'tollywood', component: TollywoodComponent },
  { path: 'bollywood', component: BollywoodComponent },
  { path: 'hollywood', component: HollywoodComponent },
  { path: '', redirectTo: '/tollywood', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }