import React, { Component } from "react";
import stories from "./data/storyData";
import Header from "./Header/Header";
import Stories from "./Stories/Stories";
import "./App.css";
import "./global.css";
import "./typography.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedStory: null,
      stories: stories
    };
  }

  render() {
    return (
      <div className="App">

        <Header />

        <Stories
          setFocusedStory={focusedStory => {
            this.setState({ focusedStory });
          }}
          stories={this.state.stories}
        />

      </div>
    );
  }
}

export default App;
