import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardModule } from './modules/board/board.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './modules/@shared/shared.module';
import { ShellModule } from './modules/shell/shell.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    ShellModule,
    HomeModule,
    BoardModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
