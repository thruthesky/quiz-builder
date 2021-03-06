import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Category } from '../../fireframe2/category';
import { Post } from '../../fireframe2/post';
import { questionData } from '../../shared/shared';
import { HomePage } from '../home/home'

/*
  Generated class for the Questionform page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-questionform',
  templateUrl: 'questionform.html'
})
export class QuestionformPage {
  questionID
  contents;
  question = questionData;
  track;
  constructor(
    private navCtrl: NavController,
    private category: Category,   
    private questionPost: Post,
    private navPar: NavParams,
    private alrtCtrl: AlertController
  ) {
    this.questionID = this.navPar.get('questionID');
    console.log('question ID', this.questionID);

    console.log(this.questionID)

    // for ( let i = 1; i < 101; i ++ ) {
    //   this.questionPost.path = 'question';
    //   this.question.question = 'This is Question No. ' + i;
    //   this.question.choice1 = 'choice 1' + i;
    //   this.question.choice2 = 'choice 2' + i;
    // this.question.choice3 = 'choice 3' + i;
    //   this.question.choice4 = 'choice 4' + i;
    //   this.question.answer = '1';
    //   this.questionPost
    //     .sets( this.question )
    //     .create( () => {
    //       console.log('question: ' + i + ' created !!');
    //     }, e => {
    //       console.log(e)
    //     })
    // }
    // this.questionCategory()
  }

  ionViewWillEnter() {
    console.log('Hello QuestionformPage Page');
    this.questionCategory(); //creates category
    this.displayQuestions();
  }

  questionCategory( ) {
    this.category
      .set( 'key', 'questions' )
      .set( 'name', 'questions' )
      .set( 'title', 'Questions' )
      .set( 'description', 'questions for quiz app' )
      .create( () => {
      }, e => {
        console.log(e)
      });
  }

  onClickReset(){
    this.question.question = '';
    this.question.choice1 = '';
    this.question.choice2 = '';
    this.question.choice3 = '';
    this.question.choice4 = '';
    this.question.answer = '';
  }

  displayQuestions() {
    if ( this.questionID ) {
      this.questionPost.path = 'question';
      this.questionPost
        .set('key', this.questionID )
        .get( re => {
          this.question = re;
          this.question.key = this.questionID;
        }, e => alert(e) );
        return;
    }
  }

  get questions() {
    if ( this.contents === void 0 ) return [];
    return Object.keys( this.contents );
  }

  validateForm() {
    if ( this.question.question == '' ) {
      this.track = { error: 'No Question' };
      return false;
    }else if( this.question.answer == '' ){
      this.track = { error: 'Input answer' }
      return false;
    }
    return true;
  }
  
  onClickCreate(){
    if ( this.validateForm() == false ) return;
    if( !this.questionID ) { this.track = { progress: 'Creating ...' };  }
    this.track = { progress: 'Updating ...' }
    this.questionPost
      .sets( this.question )
      .create( () => {
        if( this.questionID ) { this.track = { success: 'Update question success!' }; return }
        this.track = { success: 'Create question success!' }
        if( this.questionID )this.onClickReset()
      }, e => {
        console.log(e)
        this.track = { error: e };
      });
    console.log(this.question.answer)
  }

  onClickBack(){
    this.navCtrl.setRoot( HomePage )
  }

}
