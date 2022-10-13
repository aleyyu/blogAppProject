import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Card.css'

function Card() {
    return (
        <div className='Card'>
            <div className='CardTop'>
                <img src="..." alt="..." />
                <div className='UserInfo'>
                    <p>isim</p>
                    <p>ünvan</p>
                    <p>adres</p>
                </div>
            </div>

            <div className='CardBody'>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div className='CardBottom'>
                <button className='CardButton'>P</button>
                <button className='CardButton'>W</button>
            </div>
        </div>
    )
}

export default Card;