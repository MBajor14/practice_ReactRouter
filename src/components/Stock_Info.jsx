import React, { Component } from 'react';
import Display_Field from './Display_Field'

const API_PREFIX = "https://api.iextrading.com/1.0";

class Stock_Info extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ticker: null,
            price: null,
            chart: null,
            market_cap: null,
            volume: null,
            description: null,
            trending_news: null,
            CEO: null,
            num_of_employees: null
         }
    }

    // getStockInfo is central function for the API calls since we need multiple 
    // calls to get all data
    getStockInfo = () =>{
        const ticker = "aapl";
        this.getStockInfo_Company(ticker);
        this.getStockInfo_Quote(ticker);
        this.getStockInfo_News(ticker);
    }

    getStockInfo_Company = async (ticker) => {
        const api_call = await fetch(`${API_PREFIX}/stock/${ticker}/company?filter=symbol,CEO,description`);
        const data = await api_call.json();

        console.log({data});

        this.setState({
            ticker:data.symbol,
            CEO: data.CEO,
            description: data.description
        })
    }

    getStockInfo_Quote = async (ticker) => {
        const api_call = await fetch(`${API_PREFIX}/stock/${ticker}/quote?filter=latestPrice,latestVolume,marketCap`);
        const data = await api_call.json();

        console.log({data});

        this.setState({
            price: data.latestPrice,
            volume: data.latestVolume,
            market_cap: data.marketCap
        })
    }

    getStockInfo_News = async (ticker) => {
        const api_call = await fetch(`${API_PREFIX}/stock/${ticker}/news/last/1`);
        const data = await api_call.json();

        console.log(data[0].headline);

        this.setState({
            trending_news: data[0].headline
        })
    }

    render() { 
        return ( 
            <div>
                <Display_Field d_key={"Ticker"} value={this.state.ticker}/>
                <Display_Field d_key={"Price"} value={this.state.price}/>
                <Display_Field d_key={"Chart"} value={this.state.chart}/>
                <Display_Field d_key={"Market Cap"} value={this.state.market_cap}/>
                <Display_Field d_key={"Volume"} value={this.state.volume}/>
                <Display_Field d_key={"Description"} value={this.state.description}/>
                <Display_Field d_key={"Trending News"} value={this.state.trending_news}/>
                <Display_Field d_key={"CEO"} value={this.state.CEO} />
                <button onClick={this.getStockInfo}>Generate</button>
            </div>
         );
    }
}
 
export default Stock_Info;