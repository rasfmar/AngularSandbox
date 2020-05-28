import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'dragndrop', component: DragndropComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
