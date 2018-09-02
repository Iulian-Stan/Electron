import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AComponent } from './components';
import { ADirective } from './directives';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AComponent, ADirective],
    bootstrap: [AppComponent]
})
export class AppModule { }
