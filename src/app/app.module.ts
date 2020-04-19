import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicAdditionComponent } from './components/topic-addition/topic-addition.component';
import { TopicCountingComponent } from './components/topic-counting/topic-counting.component';
import { TopicSubtractionComponent } from './components/topic-subtraction/topic-subtraction.component';
import { TopicMultiplicationComponent } from './components/topic-multiplication/topic-multiplication.component';
import { TopicDivisionComponent } from './components/topic-division/topic-division.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    TopicAdditionComponent,
    TopicCountingComponent,
    TopicSubtractionComponent,
    TopicMultiplicationComponent,
    TopicDivisionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
