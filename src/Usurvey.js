import React, { Component } from 'react';
import './survery.css'


class Usurvey extends Component {
  nameSubmit(e){
    e.preventDefault();
    var studentName = this.name.value;;
    this.setState({studentName: studentName}, ()=>{
      console.log(this.state)
      //the Refs was used here but there is need for a replacement for Refs
    })
  }
  answerSelected(e) {
    var answers = this.state.answers;
    if(e.target.name === 'answer1') {
      answers.answer1 = e.target.value;
    } else if (e.target.name === 'answer2') {
      answers.answer2 = e.target.value;
    }  else if (e.target.name === 'answer3') {
      answers.answer3 = e.target.value;
    }
    this.setState({answers: answers}, function(){
      console.log(this.state)
    })
  }

  questionSubmit() {
    //this is where the firebase comes in to log the data
  }

  constructor(props) {
    super(props)
  
    this.state = {
       studentName: 'Ola',
       answers: {
         answer1: '',
         answer2: '',
         answer3: ''
       },
       isSubmitted: true
       //setting to False will display those questions and radio bottons
    };
    this.nameSubmit = this.nameSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
  }

  render() {
    var studentName;
    var questions;
    if(this.state.studentName === '' && this.state.isSubmitted === false){
      studentName = <div>
        <h1>Hey Student, please let us know your name: </h1>
        <form onSubmit={this.nameSubmit}>
          <input type="text" placeholder="Enter your name" name="name"/>
        </form>
      </div>;
    } else if(this.state.studentName !== '' && this.state.isSubmitted === false ) {
      studentName = <h1>Welcome in here, {this.state.studentName}</h1>;
      questions = <div>
        <h1>Here are some questions: </h1>
        <form onSubmit={this.questionSubmit}>
          <div className='container'>
          <label> What Kind of courses do you like most:</label> <br/>
          <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} /> Technology
          <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} /> Design
          <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} /> Marketing
          </div> 

          <div className='container'>
          <label> You are a:</label> <br/>
          <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} /> Student
          <input type="radio" name="answer2" value="In-Job" onChange={this.answerSelected} /> In-Job
          <input type="radio" name="answer2" value="Looking for Job" onChange={this.answerSelected} /> Looking for Job
          </div>

          <div className='container'>
          <label>Is online courses helpful:</label> <br/>
          <input type="radio" name="answer3" value="Yes" onChange={this.answerSelected} /> Yes
          <input type="radio" name="answer3" value="No" onChange={this.answerSelected} /> No
          <input type="radio" name="answer3" value="Maybe" onChange={this.answerSelected} /> Maybe
          </div>
          
          <input type="submit" value="submit" className='botton'/>
        </form>
        
      </div>
    } else if (this.state.isSubmitted === true) {
      studentName = <h1>Thanks, {this.state.studentName}</h1>
    }
    return (
      <div>
        {studentName}

        -------------------------------------------------------

        {questions}
      </div>
    )
  }
}

export default Usurvey