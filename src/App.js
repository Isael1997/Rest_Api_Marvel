import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'

//url: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 

//public key: cc90b6307b4b0cca6c083afc0b4bb326
//privary key: 18662b5aff20448f99e57f972fc85ee533dfd497
//ts: 1

//118662b5aff20448f99e57f972fc85ee533dfd497cc90b6307b4b0cca6c083afc0b4bb326


//hash: c93df59dd6c682320889d9d20dcfc720

function App() {

  const [charater, setlistcharacters] = useState([]);

  useEffect(() => {
    const url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=cc90b6307b4b0cca6c083afc0b4bb326&hash=c93df59dd6c682320889d9d20dcfc720'

    axios.get(url).then(res => {
      console.log(res.data.data.results)
    setlistcharacters(res.data.data.results)


  }).catch(e=> console.log(e))

  console.log(charater);
    /*const getcharacters = async ()=> {
      const url = 'http://gateway.marvel.com/v1/public/characters?apikey=cc90b6307b4b0cca6c083afc0b4bb326'
    const res = await axios.get(url);
    console.log(res.data);
  }*/
  //getcharacters();

  }, []);

  return (
    <div className='App' >
      <h1>Marvel</h1>

        <ul>
          {charater.map(char => {
              return(
                <div>
                  <li>
                    <h4>Name: {char.name}</h4>
                  </li>
                </div>
              )
            })
          }
        </ul>
    </div>
  );
}

export default App;
