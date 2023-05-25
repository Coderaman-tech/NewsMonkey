import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} key="/" country="in" category="general" />} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} key="/business" country="in" category="business" />} />
          < Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} key="/entertainment" country="in" category="entertainment" />} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} key="/health" country="in" category="health" />} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} key="/science" country="in" category="science" />} />
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} key="/sports" country="in" category="sports" />} />
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} key="/technology" country="in" category="technology" />} />
          <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} key="/general" country="in" category="general" />} />
        </Routes>
      </div>
    )
  }
}

