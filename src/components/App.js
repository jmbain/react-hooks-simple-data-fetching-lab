import {useEffect, useState} from "react"

// create your App component here

function App() {
    
    const [imageLink, setImageLink] = useState(null)

    useEffect(() => {
        
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(image => setImageLink(image.message))
        
        // console.log("Hello")
    },[])

    // console.log("hello")

    if(!imageLink) {
        return <p>Loading..</p>
    }


    return (
        <img src={imageLink} alt={"A Random Dog"} />
    )
}

export default App;