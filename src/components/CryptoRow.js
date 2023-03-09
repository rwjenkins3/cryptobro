import React from 'react'
import './CryptoRow.css';

export const CryptoRow = ({ coin }) => {

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 8
  });

  let Percent = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 2
  });

  let hcolor;
  let fhcolor;
  let thcolor;

  if(coin.price_change_percentage_1h_in_currency > 0) hcolor = { color: 'green' };
  if(coin.price_change_percentage_1h_in_currency < 0) hcolor = { color: 'red' };

  if(coin.price_change_percentage_7d_in_currency > 0) fhcolor = { color: 'green' };
  if(coin.price_change_percentage_7d_in_currency < 0) fhcolor = { color: 'red' };

  if(coin.price_change_percentage_24h_in_currency > 0) thcolor = { color: 'green' };
  if(coin.price_change_percentage_24h_in_currency < 0) thcolor = { color: 'red' };

  return (
    <div className='coinRow'>
        <div className='coinMC'>{coin.market_cap_rank}</div>
        <div className='coinIMG'><img src={coin.image} alt="coin symbol" /></div>
        <div className='coinName'>{coin.name}</div> 
        <div className='coinSym'>{coin.symbol.toUpperCase()}</div>
        <div className='coinPrice'>{USDollar.format(coin.current_price)}</div>
        <div className='coin1h' style={hcolor}>{Percent.format(coin.price_change_percentage_1h_in_currency)}%</div>
        <div className='coin4h' style={fhcolor}>{Percent.format(coin.price_change_percentage_7d_in_currency)}%</div>
        <div className='coin24h' style={thcolor}>{Percent.format(coin.price_change_percentage_24h_in_currency)}%</div>
    </div>
  )

}
