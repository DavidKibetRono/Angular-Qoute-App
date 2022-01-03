import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { TimePassedPipe } from './time-passed.pipe';
import { DislikesComponent } from './dislikes/dislikes.component';
import { DeleteComponent } from './delete/delete.component';
import { QuoteHighestComponent } from './quote-highest/quote-highest.component';
import { QuoteComponent } from './quote/quote.component';
import { HighestUpvotesDirective } from './highest-upvotes.directive';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuoteDetailsComponent,
    TimePassedPipe,
    DislikesComponent,
    DeleteComponent,
    QuoteHighestComponent,
    QuoteComponent,
    HighestUpvotesDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
