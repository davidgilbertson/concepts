import React, { PropTypes } from 'react';
import './Stories.css';
import Story from '../Story/Story';

const Stories = props => {
  const track1Stories = [];
  const track2Stories = [];
  const track3Stories = [];
  const track4Stories = [];
  const track5Stories = [];

  props.stories.forEach(story => {
    let targetArray;
    if (story.rank === 1) {
      targetArray = track3Stories;
    } else if (story.rank === 2) {
      targetArray = track2Stories.length > track4Stories.length
        ? track4Stories
        : track2Stories;
    } else if (story.rank === 3) {
      targetArray = track1Stories.length > track5Stories.length
        ? track5Stories
        : track1Stories;
    } else {
      targetArray = track3Stories;
    }

    targetArray.push(story);
  });

  return (
    <main className="Stories">
      <div className="Stories__track Stories__track-1 Stories__track--small">
        {track1Stories.map(story =>
          <Story setFocusedStory={props.setFocusedStory} story={story} />
        )}
      </div>
      <div className="Stories__track Stories__track-2 Stories__track--medium">
        {track2Stories.map(story =>
          <Story setFocusedStory={props.setFocusedStory} story={story} />
        )}
      </div>
      <div className="Stories__track Stories__track-3 Stories__track--large">
        {track3Stories.map(story =>
          <Story setFocusedStory={props.setFocusedStory} story={story} />
        )}
      </div>
      <div className="Stories__track Stories__track-4 Stories__track--medium">
        {track4Stories.map(story =>
          <Story setFocusedStory={props.setFocusedStory} story={story} />
        )}
      </div>
      <div className="Stories__track Stories__track-5 Stories__track--small">
        {track5Stories.map(story =>
          <Story setFocusedStory={props.setFocusedStory} story={story} />
        )}
      </div>
    </main>
  );
};

Stories.propTypes = {
  setFocusedStory: PropTypes.func.isRequired,
  stories: PropTypes.array.isRequired,
};

export default Stories;
