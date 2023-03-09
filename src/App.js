import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import { CryptoRow } from './components/CryptoRow';
// import data from './data';


function App() {

  const [ coinData, setCoinData ] = useState(null);

  useEffect( () => {

    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    .then(function (response) {
      console.log(response);
      setCoinData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }, [] );

  if(coinData === null) {
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h2>Top {coinData.length} Coins</h2>

      <div className='coinRow'>
        <div className='coinMC'>Rank</div>
        <div className='coinIMG'></div>
        <div className='coinName'>Name</div> 
        <div className='coinSym'></div>
        <div className='coinPrice'>Price</div>
        <div className='coin1h'>1h %</div>
        <div className='coin4h'>24h %</div>
        <div className='coin24h'>7d %</div>
      </div>

{/* 
  items => array
  item => one element in the array

    items.map( (item) => {
      ** do something with that element's data
      ** like returning some bit of UI
      return ( <UIComponent data={item} /> )
    } )

 */}
      { coinData.map( (coin) => {
        return ( <CryptoRow coin={coin} /> )
      } ) }
    </div>
  );
}

export default App;
