import './App.css';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Header from './components/Header.js';
import Meme from './components/Meme';

const Button = styled.button`
  font-size: 0.9rem;
  background: #cf5c36;
  transition: background-color 1s ease-out 100ms;
  border-radius: 3px;
  color: #fff;
  margin: 0.5em 1em;
  padding: 0.5em 1.8em;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  cursor: pointer;

  &:hover {
    background-color: #38369a;
  }

  &:active {
    transform: scale(0.96);
  }
`;

function App() {
  const [memeImage, setMemeImage] = useState(['']);
  const website = new URL('https://api.memegen.link/templates');
  const randomNumber = Math.floor(Math.random() * 100);

  const getMemeImage = () => {
    fetch(website)
      .then((response) => response.json())
      .then((json) => console.log(json[randomNumber].blank));
  };

  return (
    <div className="App">
      <Header />
      <Button onClick={getMemeImage}>Get Random</Button>
      <div className="form">
        <label>
          <input className="form--input" placeholder="Top text" type="text" />
        </label>
        <label>
          <input
            className="form--input"
            placeholder="Bottom text"
            type="text"
          />
        </label>
      </div>
      <Meme />
      <Button onClick={getMemeImage}>Download</Button>
    </div>
  );
}

export default App;
