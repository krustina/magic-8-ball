var React= require('react');
var ReactDOM= require ('react-dom');
var App= require('./components/App');
require ('./index.css');
var Router= require('react-router').Router
var Route= require('react-router').Route
var Link= require('react-router').Link





ReactDOM.render(
  <App />,
  document.getElementById('root')
);
