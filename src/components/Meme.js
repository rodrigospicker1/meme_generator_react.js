import React from "react";

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/4/1g8my4.jpg"
    })
    const [allMemes, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    })

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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