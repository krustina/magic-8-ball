var React = require('react');
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

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


var Message = React.createClass({
    getInitialState(){
    return{
      message: words[Math.floor(Math.random() * words.length)]  
        }
    },
//   componentDidMount: function(){
//     this._tellFortune();
//   },
//   _tellFortune: function(){
//       this.setState({
//       gameStatus: 'predicted',
//       message: words[Math.floor(Math.random() * words.length)]
//       })
      
//   },
   render: function() {
  
    return(
    <main>
        <div className='main-ball-two floating'>
          <div className='inside-rim'>
              <div className= 'triangle'>
                <p className='fortune'>{this.state.message}</p>
              </div>
          </div>
        </div>
        
        <button onClick={() => browserHistory.push('/')} className='restart-button floating-two'>Play again?</button>
      </main>
      )
    }
    
})
module.exports = Message;


