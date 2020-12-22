import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './card.styles.css.css';

export const Card = props => (
    <div className="card-container card-container:hover">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="Monster Picture"/>
        <h1>{ props.monster.name }</h1>
        <p>{props.monster.email}</p>
    </div>
)

Card.propTypes = {
    monster: PropTypes.any
  };