import React, {useState,useEffect} from 'react'
// import axios from 'axios';
import Loader from 'react-loader-spinner'

const WithLoader = (Component) => {

    const NewComponent = ({match}) => {
        const [coins, setCoins] = useState([])
        const [isLoading, setIsLoading] = useState(true);

            
        useEffect(() =>{
            fetchItem();
        },[])

        const fetchItem = async() => {
            const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false')

            const item = await data.json();
            setCoins(item);
            setIsLoading(false);
        }

        return (
            <div>
                {
                    isLoading ?
                    (
                        <div className="loader">
                            <Loader 
                            type="Puff"
                            color = "#00BFFF"
                            height = {100}
                            width = {100}
                            />
                        </div>
                    ):
                    (<Component coins={coins} />)
                }
            </div>
        )
    }  
    return NewComponent; 
}

export default WithLoader;
