import React, { Component } from 'react';
import './App.css';
import Header from './components/global/Header.js';
import Footer from './components/global/Footer.js';


class App extends Component {

  render() {
    return (

	<div className="App">

		<Header />
    <Footer/>
 
	</div>

    );
  }
}

export default App;
