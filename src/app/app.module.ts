import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { InputComponent } from './components/input/input.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { DescriptionPipe } from './description.pipe';
import { SectionComponent } from './components/section/section.component';
import { ObserverDirective } from './observer.directive';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    NavigationComponent,
    LogoComponent,
    ButtonComponent,
    HeaderSectionComponent,
    InputComponent,
    ArrowComponent,
    DescriptionPipe,
    SectionComponent,
    ObserverDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
