import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloPeopleComponent } from 'src/components/hello-people/hello-people.component';
import { PersonStoreService } from 'src/services/person-store.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
