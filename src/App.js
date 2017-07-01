import React, { Component } from 'react';
import stories from './data/storyData';
import Header from './Header/Header';
import Stories from './Stories/Stories';
import './App.css';
import './global.css';
import './typography.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedStoryId: null,
      stories: stories,
    };
  }

  componentDidMount() {
    performance.mark('app-interactive');
    console.info('App interactive (ms)', performance.now());
  }

  render() {
    return (
      <div className="App">

        <Header />

        <Stories
          setFocusedStory={focusedStoryId => {
            this.setState({ focusedStoryId });
          }}
          stories={this.state.stories}
          focusedStoryId={this.state.focusedStoryId}
        />

        <div className="App__warning App__too-small">
          <p>This page is not for you</p>
          <p>What you've found is a proof of concept for displaying content on large screens</p>
          <p>I don't want to make a whole thing about it, but yours isn't big enough</p>
        </div>

        <div className="App__warning App__no-css-var">
          <p>Oh no you don't</p>
          <p>This website is for hip young things with browsers that support CSS variables</p>
          <p>You may like to try literally any other browser</p>
        </div>

      </div>
    );
  }
}

export default App;
