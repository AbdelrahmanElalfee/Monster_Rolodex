import { Component } from 'react';
import './card-list.style.css';
import Card from "../card/card.component";

const CardListComponent = ({monsters}) => {
        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                return <Card key={monster.id} monster={monster}/>
            })}
            </div>
        )

}

export default CardListComponent;