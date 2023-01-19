import './App.css';
import styled, { css } from 'styled-components';
import Header from './components/Header.js';
import Meme from './components/Meme';

const url = new URL(
  'https://api.memegen.link/templates/images/ds/small_file/high_quality.png',
);

console.log(url);

const Button = styled.button`
  font-size: 0.9rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #000;
  color: coral;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  border: 2px solid rgba(255, 255, 255, 0.586);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  cursor: pointer;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <Button>Download</Button>
    </div>
  );
}

export default App;
