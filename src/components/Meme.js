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

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <main>
            <div className="form">
                <input onChange={handleChange} name="topText" value={meme.topText} type="text" placeholder="Texto do topo" className="form--input" />
                <input onChange={handleChange} name="bottomText" value={meme.bottomText} type="text" placeholder="Texto do fundo" className="form--input" />
                <button onClick={getMemeImage} className="form--button">Gerar uma nova imgem</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text-top">{meme.topText}</h2>
                <h2 className="meme--text-bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}