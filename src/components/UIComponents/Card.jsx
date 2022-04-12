import * as React from 'react'
import Author from './Author'
import './Card.css'

const Card = function(props) {
    console.log(props)
    return (
        <div className='card' >
            <div className="cardImg" >
                <div className="timer">11:30:30</div>
                <input type="checkbox" name="" id="" className='card__checkbox' defaultChecked={console.log('Tôi đã được check')}  />
            </div>
            <Author author={props.card.author}></Author>
            <div className="card__infor">
                <div className="card__status">Current Bid</div>
                <div className="card__price">{props.card.cardPrice} ETH</div>
            </div>
            <button>Place a bid</button>
        </div>      
            )
}

export default Card