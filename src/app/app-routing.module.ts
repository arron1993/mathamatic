import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicCountingComponent } from './components/topic-counting/topic-counting.component';
import { TopicAdditionComponent } from './components/topic-addition/topic-addition.component';
import { TopicSubtractionComponent } from './components/topic-subtraction/topic-subtraction.component';
import { TopicMultiplicationComponent } from './components/topic-multiplication/topic-multiplication.component';
import { TopicDivisionComponent } from './components/topic-division/topic-division.component';

const routes: Routes = [
    {path: 'topics', component: TopicListComponent},
    {path: 'topics/counting', component: TopicCountingComponent},
    {path: 'topics/addition', component: TopicAdditionComponent},
    {path: 'topics/subtraction', component: TopicSubtractionComponent},
    {path: 'topics/multiplication', component: TopicMultiplicationComponent},
    {path: 'topics/division', component: TopicDivisionComponent},
    {path: '', redirectTo: '/topics', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
