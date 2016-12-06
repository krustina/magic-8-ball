var React=require('react');


var words=[
  //positive answers
  'ha, yea',
  'yes, def',
  ':~) yes!',
  'outlook good',
  'oh ya',
  
  //non-committal
  'reply ~hazy~',
  'cannot predict atm',
  'ask again',
  'not sure rn',
  
  //negative answers
  'lol no',
  'dont count on it',
  'nope',
  'my sources say no',
  'doubt it'
    ];

var App = React.createClass({
  getInitialState(){
    return{
      gameStatus: 'playing'  
    }
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
      <div className='logo-container'>
        <a href='https://github.com/krustina/magic-8-ball'>
          <img className='logo' src='magic-8-ball-icon2.png' role="presentation"/>
        </a>
      </div>
      
          <div className='main-ball floating'>
            <div className='inside-ball'>
              <p className='eight'>:~)</p>
            </div>
          </div>
          
          <form className='ask-box floating-two'>
              <p className='question'>Ask me a question...</p>
              <div className='ask-container'>
                <input ref="userInput" type="text"/>
                <button onClick={this._handleSubmit} className='ask-button'>Ask</button>
              </div>
          </form>
       
      </main>
      );
    }
  if (this.state.gameStatus === 'predicted'){
    return(
    <main>
    <div className='logo-container'>
        <img className='logo' src='magic-8-ball-icon2.png' role="presentation"/>
    </div>
        <div className='main-ball-two floating'>
          <div className='inside-rim'>
              <div className='triangle'>
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
