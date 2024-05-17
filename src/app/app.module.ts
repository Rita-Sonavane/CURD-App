import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonService } from './services/person.service';
import { FormsModule } from '@angular/forms';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonCardComponent } from './components/person-card/person-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    PersonListComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
