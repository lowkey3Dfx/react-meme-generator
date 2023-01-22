import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import Header from './components/Header.js';

function App() {
  const [meme, setMeme] = useState('bender');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memesArray, setMemesArray] = useState([]);

  axios
    .get('https://api.memegen.link/templates/')
    .then(function (response) {
      setMemesArray(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  const url = topText
    ? `https://api.memegen.link/images/${meme}/${topText
        .replace('?', '~q')
        .replace('#', '~h')}/${bottomText}`
    : `https://api.memegen.link/images/${meme}.jpg`;

  const downloadImage = () => {
    saveAs(`https://api.memegen.link/images/${meme}`, 'meme');
  };

  return (
    <div className="App">
      <Header />

      <div className="section">
        Meme template
        <label>
          <select
            value={meme}
            onChange={(e) => setMeme(e.currentTarget.value)}
            className="text"
          >
            {memesArray.map((image) => (
              <option value={image.id} key={image.id}>
                {image.id}
              </option>
            ))}
          </select>
        </label>
        <label>
          <input
            className="text"
            value={meme}
            onChange={(e) => setMeme(e.currentTarget.value)}
          />
        </label>
        <div className="text--section">
          Top Text
          <label>
            <input
              placeholder="Top text"
              className="text"
              value={topText}
              onChange={(e) => {
                setTopText(e.currentTarget.value);
              }}
            />
          </label>
          Bottom Text
          <label>
            <input
              placeholder="Bottom text"
              className="text"
              value={bottomText}
              onChange={(e) => {
                setBottomText(e.currentTarget.value);
              }}
            />
          </label>
        </div>
      </div>
      <img src={url} className="memeImg" alt="meme" data-test-id="meme-image" />
      <button onClick={downloadImage} className="button">
        Download
      </button>
    </div>
  );
}

export default App;
