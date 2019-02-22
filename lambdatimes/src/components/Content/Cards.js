import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card card={card} key={card.title} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = PropTypes.arrayOf(PropTypes.shape({
  headline: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}))

export default Cards;