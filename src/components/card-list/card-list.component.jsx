import React, { Component } from 'react';
import './card-list.style.css';
import PropTypes from 'prop-types';
import { Card } from '../card/card.component';

export const CardList = props => {
    return <div className="card-list">
                {props.monsters.map((monster) =>
                   <Card key={monster.id} monster={monster} />
                )}
            </div>
}


CardList.propTypes = {
    monsters: PropTypes.any
  };