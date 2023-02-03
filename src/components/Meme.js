import React from "react";

export default function Meme(){
    return(
        <main>
            <form className="form">
                <input type="text" placeholder="Texto do topo" className="form--input" />
                <input type="text" placeholder="Texto do fundo" className="form--input" />
                <button className="form--button">Gerar uma nova imgem</button>
            </form>
        </main>
    )
}