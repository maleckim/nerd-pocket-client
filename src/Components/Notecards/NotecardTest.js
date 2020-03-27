import React,{Component} from 'react';
// import UserContext from '../../Context/ApplicationContext';


export default class NotecardTest extends Component{
constructor(props){
  super(props)
  this.state = {
    notecards: this.props.notecards,
    question: 0,
    answer:'',
    userAnswer: '',
    score: 0,
    wrong: {},
    addwrong: function(data, number){
      let {question, correct, users} = data

      this.wrong[number] = [question,correct, users]
    },
    feedback:false
  }
}

handleInput = (e) => {
  e.preventDefault();
  let {question} = this.state
  let userAnswer = this.state.userAnswer

  this.answerChecker(userAnswer);

  question++

  this.setState({question})
  
}

answerChecker = (guess) => {
  let {answer,question} = this.state.notecards[this.state.question];
  let {score} = this.state
  answer = answer.toLowerCase().replace(/\s\s+/gi,' ')
  guess = guess.toLowerCase().replace(/\s\s+/gi,' ')

  if(answer == guess){
    score++
    this.setState({score})
  }else{
    let data = {
      question: question,
      correct: answer,
      users: guess
    }
    this.state.addwrong(data,this.state.question)
  }

  this.setState({userAnswer:''})
  
}

createTest = () => {
 
  let count = this.state.question;

  if(count >= this.state.notecards.length){
    return(
      <p>you answered {this.state.score} of {this.state.notecards.length} questions correctly, 
      <button onClick={() => this.setState({feedback:true})}>feedback?</button>
      <button onClick={() => this.setState({question:0, wrong:{}, score:0, feedback:false})}>try again</button>
      </p>
    )
  }

  let {question} = this.state.notecards[count];
  
  
  if(this.state.notecards.length > 0){
    return(
      <form onSubmit={e => this.handleInput(e)}>
        <label>{question}</label>
        <input type='text' value={this.state.userAnswer} onChange={e => this.setState({userAnswer:e.target.value})}/>
        <button type='submit'>answer</button>
      </form>

    )
  }

}

feedback = () => {
  let wrong = this.state.wrong
  
  return(
    Object.values(wrong).map(a => <p>Question {a[0]}?<br /> You answered -- '{a[2]}'<br /> correct answer was -- '{a[1]}'.</p>)
  )   
}



render(){
  return(
  <>
  {this.state.feedback ? this.feedback() : this.createTest()}
  </>
  ) 
} 
}