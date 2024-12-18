import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
