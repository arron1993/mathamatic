import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicAdditionComponent } from './components/topic-addition/topic-addition.component';
import { TopicCountingComponent } from './components/topic-counting/topic-counting.component';
import { TopicSubtractionComponent } from './components/topic-subtraction/topic-subtraction.component';
import { TopicMultiplicationComponent } from './components/topic-multiplication/topic-multiplication.component';
import { TopicDivisionComponent } from './components/topic-division/topic-division.component';
import { QuestionDisplayComponent } from './components/question-display/question-display.component';

import { TopicDifficultyPipe } from './pipes/topic-difficulty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    TopicAdditionComponent,
    TopicCountingComponent,
    TopicSubtractionComponent,
    TopicMultiplicationComponent,
    TopicDivisionComponent,
    QuestionDisplayComponent,
    TopicDifficultyPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
