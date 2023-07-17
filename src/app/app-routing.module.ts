import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { TutorialAddComponent } from './components/tutorial-add/tutorial-add.component';
import { TutorialDetailComponent } from './components/tutorial-detail/tutorial-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialListComponent },
  { path: 'tutorials/:id', component: TutorialDetailComponent },
  { path: 'addtutorial', component: TutorialAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
