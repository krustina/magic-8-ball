var React = require('react');
var Link = require('react-router').Link;


var words = [
    'lol no',
    'ha yea',
    'yup',
    'im not sure',
    'def',
    'u hurt me',
    'if only',
    ':~) yes',
    'reply ~hazy~',
    'k',
    ':~) no',
    'wat?',
    'ask me again',
    'nah',
    ];

var App = React.createClass({
  getInitialState(){
    return{
      gameStatus: 'playing'  
    }
  },
  componentDidMount: function(){
    this._tellFortune();
  },
  _startGame: function(){
    this.setState({
      gameStatus: 'playing',
      message: ''
        })
    
  },
  _tellFortune: function(){
      this.setState({
      gameStatus: 'predicted',
      message: words[Math.floor(Math.random() * words.length)]
      })
      
  },
  _handleSubmit: function(event){
    var userInput=this.refs.userInput.value
    event.preventDefault();
    
    if(typeof userInput === 'string'){
      this._tellFortune()
    }
  },
  
  render: function() {
  if(this.state.gameStatus === 'playing'){  
    return (
      <main>
        <div className='main-ball floating'>
          <div className= 'inside-ball'>
            <p className='eight'>8</p>
          </div>
        </div>
        
        <form onSubmit={this.handleSubmit} className= 'ask-box floating-two'>
            <p className= 'question'>Ask me a question...</p>
        
            <input ref="userInput" type="text" />
        </form>
      </main>
      );
    }
  if (this.state.gameStatus === 'predicted'){
    return(
    <main>
        <div className='main-ball-two floating'>
          <div className='inside-rim'>
              <div className= 'triangle'>
                <p className='fortune'>{this.state.message}</p>
              </div>
          </div>
        </div>
        
        <button onClick={this._startGame} className='restart-button floating-two'>Play again?</button>
      </main>
      )
    }
  }
});

module.exports = App;
