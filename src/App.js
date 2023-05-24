import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';

export default class App extends Component {
 
  apiKey=process.env.REACT_APP_NEWS_API;
  
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News apiKey={this.apiKey} pageSize={6}  key="/" country="in" category="general"/>}/>
          <Route exact path='/business' element={<News apiKey={this.apiKey} pageSize={6} key="/business"  country="in" category="business"/>}/>
          < Route exact path='/entertainment' element={<News apiKey={this.apiKey} pageSize={6} key="/entertainment" country="in" category="entertainment"/>}/>
          <Route exact path='/health' element={<News apiKey={this.apiKey} pageSize={6} key="/health" country="in" category="health"/>}/>
          <Route  exact path='/science' element={<News apiKey={this.apiKey} pageSize={6} key="/science" country="in" category="science"/>}/>
          <Route exact path='/sports' element={<News apiKey={this.apiKey} pageSize={6}  key="/sports" country="in" category="sports"/>}/>
          <Route  exact path='/technology' element={<News apiKey={this.apiKey} pageSize={6} key="/technology" country="in" category="technology"/>}/>
          <Route exact path='/general' element={<News apiKey={this.apiKey} pageSize={6} key="/general"  country="in" category="general"/>}/>
          </Routes>
      </div>
    )
  }
} 

