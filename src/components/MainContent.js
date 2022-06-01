import React from "react"
import "../css/mainContent.css"
import dataInfo from "../data/data"
const MainContent = () => {
    console.log(dataInfo)
    const memes = dataInfo.data.memes;

    const [site, setUrl] = React.useState("")
    function handleUrlChange() {
        const index = Math.floor(Math.random() * memes.length)

        setUrl(
            memes[index].url
        )
    }


    return (
        <div>
            <button onClick={handleUrlChange}>Get a new Image</button>
            <div className="image-container">
                <img src={site} alt={memes.name} />
            </div>

        </div>
    )
}

export default MainContent