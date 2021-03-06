import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage }from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { QuestionformPage } from '../pages/questionform/questionform';
import { TestPage } from '../pages/test/test';
import { FireModule } from '../fireframe2/fire-module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    LoginPage,
    QuestionformPage,
    TestPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    LoginPage,
    QuestionformPage,
    TestPage
  ],
  providers: []
})
export class AppModule {}
