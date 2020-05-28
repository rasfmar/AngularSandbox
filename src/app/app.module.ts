import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		DragndropComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DragDropModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
