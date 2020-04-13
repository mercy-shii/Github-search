import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'

import { ProfileService} from './service/profile.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { HighlightDirective } from './highlight .directive';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [ ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
