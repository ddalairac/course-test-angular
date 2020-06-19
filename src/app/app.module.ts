import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './integration-test/home/home.component';
import { TodosComponent } from './integration-test/2-todos/todos.component';
import { UserDetailsComponent } from './integration-test/3-user-details/user-details.component';
import { VoterComponent } from './integration-test/1-voter/voter.component';
import { HighlightDirective } from './integration-test/highlight.directive';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TodosComponent,
        UserDetailsComponent,
        VoterComponent,
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
