import React, {useState} from 'react'
import WithLoader from './WithLoader'
import Coin from './Coin'

const Crypto = ({coins}) => {
    
    const [search, setSearch] = useState('') 

    const handleChange = e => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    console.log(coins)
    return (
        <div className='coin-app'>
            <div className='coin-search'>
                <h1 className='coin-text'>Crypto Tracker</h1>
                <form>
                    <input type="text" placeholder="search..." className='coin-input' onChange={handleChange}/>
                </form>
            </div>

                
            {filteredCoins.map((coin) => {
                return <Coin 
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    volume={coin.total_volume}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    marketCap={coin.market_cap}
                />
            })}
        </div>
    )
}

export default WithLoader(Crypto);
