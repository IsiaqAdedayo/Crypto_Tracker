import React from 'react'

const Coin = ({name,image,symbol,price,volume,priceChange,marketCap}) => {
    
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                
                <div className="coin-data">
                    <div className="coin-price"><span>Price: </span><p>&#8358;{price.toLocaleString()}</p></div>
                    <div className="coin-volume"><span>Volume: </span><p className="coin-volumeNum">{volume.toLocaleString()}</p></div>
                    

                    { 
                    priceChange > 0 ? (
                        <div className="coin-percent"><span>Variation: </span><p className="green"> {priceChange.toFixed(2)}% </p></div> 
                    ):(
                        <div className="coin-percent"><span>Variation: </span><p className="red"> {priceChange}% </p></div>
                        ) 
                    }
                    <div className="coin-marketcap"><span>Market Cap: </span><p className="coin-marketcapNum"> &#8358;{marketCap.toLocaleString()}</p></div>
                </div>
            </div>
        </div>
    )
}

export default Coin
