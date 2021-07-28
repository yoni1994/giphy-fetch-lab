import React, {useState, useEffect} from 'react';
import Gif from './Components/gif'
import Button from './Components/button'

function App() {

  const [gif, setGif] = useState('')

  const handleClick = () => {
    makeApiCall()
  }

    const makeApiCall = () => {
    let randomGif = 'https://api.giphy.com/v1/gifs/random?api_key=ls1GX1Jr1iEPnlVxI5DaxMnCpwHkk8tk'
    fetch(randomGif)
    .then(res => res.json())
    .then(gifData => {
      console.log('gif data', gifData)
      setGif((gifData.data.images.downsized_large.url))
    })
  }

  useEffect(() => {
    makeApiCall()
  }, []);

  return(
    <div className='App'>
      <h1>Giphy</h1>
      <div className='button'>
      <Button 
        handleClick={handleClick}
      />
      </div>
      <Gif gif={gif}/>
    </div>
  )
}

export default App