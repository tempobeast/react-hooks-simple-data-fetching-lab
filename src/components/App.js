// create your App component here
import React, { useEffect, useState } from "react";

function App() {

    const [dogCEO, setDogCEO] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then((data) => {
            setDogCEO(data.message)
            setIsLoaded(true)
        })
    }, [])


    if (!isLoaded) return <p>Loading...</p>

    return <img src={dogCEO} alt="A Random Dog"></img>
}

export default App