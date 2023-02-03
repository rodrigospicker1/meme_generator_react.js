import React from "react";
import memesData from "../memesData.js"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/4/1g8my4.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Texto do topo" className="form--input" />
                <input type="text" placeholder="Texto do fundo" className="form--input" />
                <button onClick={getMemeImage} className="form--button">Gerar uma nova imgem</button>
            </div>
            <img src={meme.randomImage} title={meme.randomImage} className="meme--image" />
        </main>
    )
}