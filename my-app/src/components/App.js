var React = require('react');
var Link = require('react-router').Link;
var App = React.createClass({
  
  
  render: function() {
  return (
    <main>
      <div className='main-ball'>
        <div className= 'inside-ball'>
          <p className='eight'>8</p>
        </div>
      </div>
    </main>
    );
  }
});


module.exports = App;
