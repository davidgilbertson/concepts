import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Story.css';

const WIDTH = 1000;
const TOP = 100;
const ANIMATION_MS = 250;

class Story extends Component {
  componentWillReceiveProps(nextProps) {
    const wasFocused = this.props.story.id === this.props.focusedStoryId;
    const willBeFocused = nextProps.story.id === nextProps.focusedStoryId;
    if (wasFocused !== willBeFocused) {
      const placeholderDims = this.placeholderEl.getBoundingClientRect();

      if (!wasFocused && willBeFocused) {
        // OK let's expand this story
        // Step 1: expand the wrapper (black background) to full screen
        this.wrapperEl.style.position = 'fixed';
        this.wrapperEl.style.top = '0';
        this.wrapperEl.style.left = '0';
        this.wrapperEl.style.right = '0';
        this.wrapperEl.style.bottom = '0';
        this.wrapperEl.style.background = 'rgba(0, 0, 0, 0.7)';

        // Step 2: set the position of the story panel to relative, but keep it visually in the same place
        this.panelEl.style.transform = `translate(${placeholderDims.left}px, ${placeholderDims.top}px)`;
        this.panelEl.style.width = `${placeholderDims.width}px`;

        // Step 3: transition the story panel to its expanded size
        // (wait a bit to let the background fade to black first)
        setTimeout(() => {
          const sideMargin = (this.wrapperEl.offsetWidth - WIDTH) / 2;
          this.panelEl.style.transition = `${ANIMATION_MS}ms`;
          this.panelEl.style.transform = `translate(${sideMargin}px, ${TOP}px)`;
          this.panelEl.style.width = `${WIDTH}px`;
          this.panelEl.style.height = `calc(100vh - ${TOP * 2}px)`;
        }, ANIMATION_MS);

        // Step 4: set it to auto dimensions so it resizes with the screen.
        setTimeout(() => {
          this.panelEl.style.transform = `translate(0, 100px)`;
          this.panelEl.style.margin = '0 auto';
          this.panelEl.style.transition = '';
        }, ANIMATION_MS * 2);
      }

      if (wasFocused && !willBeFocused) {
        this.wrapperEl.style.position = '';
        this.wrapperEl.style.top = '';
        this.wrapperEl.style.left = '';
        this.wrapperEl.style.right = '';
        this.wrapperEl.style.bottom = '';
        this.wrapperEl.style.background = '';

        this.panelEl.style.transform = '';
        this.panelEl.style.transition = '';
        this.panelEl.style.margin = '';
        this.panelEl.style.width = '';
        this.panelEl.style.height = '';
      }
    }
  }

  render() {
    const { props } = this;
    const isFocused = props.story.id === props.focusedStoryId;

    const className = classnames(
      'Story',
      `Story--rank-${props.story.rank}`, {
      'Story--focused': isFocused,
    });

    const authorOrImage = props.story.image
      ? (
        <figure className="Story__image-wrapper">
          <img
            className="Story__image"
            src={props.story.image}
            alt=""
          />

          <figcaption className="Story__image-caption">
            <span>{props.story.author}</span>

            <span>{props.story.date}</span>
          </figcaption>
        </figure>
      )
      : (
        <div className="Story__author-date">
          <span>{props.story.author}</span>

          <span>{props.story.date}</span>
        </div>
      );

    return (
      <article
        ref={ el => this.placeholderEl = el }
        className={className}
      >
        <div
          className="Story__wrapper"
          ref={ el => this.wrapperEl = el }
          onClick={(e) => {
            if (isFocused) {
              props.setFocusedStory(null);
              e.stopPropagation();
            } else {
              props.setFocusedStory(props.story.id)
            }
          }}
        >
          <div
            className="Story__panel"
            ref={ el => this.panelEl = el }
          >
            <h1 className="Story__title">{props.story.title}</h1>

            {authorOrImage}

            <div className="Story__body">
              {props.story.intro}
              {isFocused && props.story.remainder}
            </div>
          </div>
        </div>
      </article>
    );
  }
}

Story.propTypes = {
  setFocusedStory: PropTypes.func.isRequired,
  story: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  focusedStoryId: PropTypes.number,
};

export default Story;
