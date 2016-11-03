import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UserAuth } from '../providers/user-auth';
import { QuestionsPage } from '../pages/questions/questions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    QuestionsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    QuestionsPage
  ],
  providers: [ UserAuth ]
})
export class AppModule {}
