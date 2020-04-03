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

  if(answer === guess){
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
      <div className='testScore'>
        <p>you answered {this.state.score} of {this.state.notecards.length} questions correctly.</p>
        <button onClick={() => this.setState({feedback:true})}>feedback?</button>
        <button onClick={() => this.setState({question:0, wrong:{}, score:0, feedback:false})}>try again</button>
      </div>
    )
  }

  let {question} = this.state.notecards[count];
  
  
  if(this.state.notecards.length > 0){
    return(
    <div className='notecardTest'>
      <form className='testForm' onSubmit={e => this.handleInput(e)}>
        <label>{question}</label><br />
        <input type='text' value={this.state.userAnswer} onChange={e => this.setState({userAnswer:e.target.value})}/><br />
        <button type='submit'>answer</button>
      </form>
    </div>
    )
  }

}

feedback = () => {
  let wrong = this.state.wrong
  
  return(
    Object.values(wrong).map(a => <div className='feedback'><p>Question: {a[0]}?<br /> You answered -- '{a[2]}'<br /> correct answer was -- '{a[1]}'.</p></div>)
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