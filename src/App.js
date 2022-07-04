
import React from "react";
import './App.css';
import getQuiz from './data/quiz'
import logo from './logo.svg' // add this new line
class NavBar extends React.Component {
  
  
  render() {
    const menuItems = [
      {
        title:"Home",
        to:'/'
      },
      {
        title:"Search",
        submenu: [
          {
            title: "LinearSearch",
            to:'/search/linear'
          },
          {
            title:"Binary Search",
            to:'/search/binary'
          }
        ],
      },
      {
        title:"About",
        submenu: [
          {
            title:"Who we are",
            to:'/'
          },
          {
            title:"Our values",
            to:'/'
          },
        ],
      },
        
      
    ];

    return(
      <nav>
        <ul className='Menu'>
          {menuItems.map((item, index) => {
            return(
              <li className='menuItem' key={index}>
                {
                  item.to ? (
                    <a href={item.to}>{item.title}</a>
                  ) : item.title
                }
                {
                  item.submenu ? (
                    <ul className = 'subMenu'>
                      {item.submenu.map((sub, index) =>{
                        return (
                          <li key={index} className="subItem">
                            <a href={sub.to}>{sub.title}</a>
                          </li>
                        )
                      })}
                    </ul>): ''}
              </li>
            );
          })
          }
          </ul>
      </nav>
    )
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeView :'quizOverView',
      quiz:getQuiz(),
      answer:[],
    }
    this.withoutParam = this.withoutParam.bind(this);
  }
  // below the constructor
withoutParam() {
  console.log('Testing')
  console.log(this.state)
}
showQuizQuestions(index) {
  console.log('show')
  this.setState(()=>{
    console.log(index)
    
    return {
      'activeView':'quizQuestions',
      'buttonDisabled':false,
      'currentQuestionIndex':index
    }
  });
  console.log(this.state)
  
}
  submitAnswer(answer){
    console.log(answer)
    answer.status=1
    this.setState((prevState)=>{
      var app=this
      return{'buttonDisabled':true,
      'answer':Object.assign({[this.state.currentQuestionIndex]:answer},prevState.answers)}
    })
    var app=this
    setTimeout(function(){
      let nextIndex=app.state.currentQuestionIndex + 1
      if(nextIndex< app.state.quiz.numOfQuestions)
     app.showQuizQuestions(nextIndex)
    else 
      app.showResults()},app.state.transitionDelay)
    
     
        
    }


    
    showResults() {
      this.setState((prevState)=>{
        return{
            activeView:'quizResults'    
        }
      })
    }
  render() {
    
      const question=this.state.quiz.questions[this.state.currentQuestionIndex]
      
    
     
    return (
      <div className="App">
        <NavBar/>
        {
          this.state.activeView ==='quizOverView' &&(
            <section className='overviewSection' style={{ display: 'flex',flexDirection:'column', justifyContent: 'center',alignItems:'center' }}>
        
             <div className='imageWrapper' >
              <img src={logo} alt="banner" className='banner' width="100" height="100" />
             </div>
             <div className='description'>
            {this.state.quiz.introduction}
             </div>
        {/*<button style={{ 
            marginTop:'8px',padding: '8px',
            cursor: 'pointer', background:'rgb(203, 179, 220)',
            fontSize:'20px'}}
        >Let Start</button>*/}
        
{/* Class Properties */}
<button style={{
  marginTop: '8px', padding: '8px',
  cursor: 'pointer', background: 'rgb(203, 179, 220)',
  fontSize: '20px'
}}
  onClick={this.withoutParam }
>
  Let Test Function
</button>
<button style={{
  marginTop: '8px', padding: '8px',
  cursor: 'pointer', background: 'rgb(203, 179, 220)',
  fontSize: '20px'
}}
  onClick={ ()=>this.withoutParam() }
>
  Let Test Function
</button>
<button style={{
  marginTop: '8px', padding: '8px',
  cursor: 'pointer', background: 'rgb(203, 179, 220)',
  fontSize: '20px'
}}
  onClick={this.withoutParam.bind(this) }
>
  Let Test Function
</button>
    <button style={{
      marginTop: '8px', padding: '8px',
      cursor: 'pointer', background: 'rgb(203, 179, 220)',
      fontSize: '20px'
    }}
      onClick={this.showQuizQuestions.bind(this,0) }
    >
      Let Start Quiz
    </button>
    </section>
          )
        }
    {
      this.state.activeView==='quizQuestions' && (
    <section className='questionSection' style={{display:'flex', flexDirection:'column',justifyContent:'center',textAlign:'center'}}>
      <div className="question">
      {question.question}
      </div>
      <div className="answers">
       {
        question.answers.map((answer,index)=>(
          <p key={index}>
         <button className="ans_button" onClick={this.submitAnswer.bind(this,answer)} disabled={this.state.buttonDisabled}>{answer.ur_answer}</button>
         </p>
        ))}
      </div>
      
    </section> 
      )
    }
    {
      this.state.activeView==='quizResults' && (
        
          <div className="question" style={{ display: 'flex',flexDirection:'column', justifyContent: 'center',textAlign:'center' }}>
            {this.state.quiz.questions.map((question,index)=>{
              return(
                <div  key={index}>
                  {question.question}
                {question.answers.map((answer,id)=>(
                <div key={id}>{
                  answer.status===1?(id+1 ===question.correct?(<p className="answer" style={{color:'green' }}>✔️{answer.ur_answer}</p>):
                 (<p className="answer"  style={{color:'red' }}>❌{answer.ur_answer}</p>))
                 :(<p>{answer.ur_answer}</p>)
                }</div>)
                )}
                <p style={{color:'green' }}>{question.explanation}</p>
                <hr/>
              </div>
              )
            })}
            
          </div>
          
      )
    }
      </div>
    );
  }
}

export default App;

