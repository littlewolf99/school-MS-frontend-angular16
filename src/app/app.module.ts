import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { TutorialAddComponent } from './components/tutorial-add/tutorial-add.component';
import { TutorialDetailComponent } from './components/tutorial-detail/tutorial-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    TutorialListComponent,
    TutorialAddComponent,
    TutorialDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
