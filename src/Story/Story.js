import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './Story.css';

const Story = props => {
  const className = classnames('Story', `Story--rank-${props.story.rank}`);

  return (
    <article className={className}>
      <h1
        className={`type-header-rank-${props.story.rank}`}
      >{props.story.title}</h1>
      <div className="Story__body">
        {props.story.body}
      </div>
    </article>
  );
};

Story.propTypes = {
  setFocusedStory: PropTypes.func.isRequired,
  story: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Story;
