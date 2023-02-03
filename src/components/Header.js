import React from 'react'

export default function Header(){
    return(
        <header className="header">
            <img src={require('../images/troll.png')} className="header--image" />
            <h2 className="header--title">Gerador de meme</h2>
        </header>
    )
}