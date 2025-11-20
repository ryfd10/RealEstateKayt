import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { PropertyListComponent } from './components/property-list/property-list.component';

@NgModule({
  declarations: [HomeComponent, PropertyListComponent],
  imports: [BrowserModule],
  bootstrap: [HomeComponent]
})
export class AppModule {}
