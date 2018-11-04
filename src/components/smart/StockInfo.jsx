import React, { Component } from 'react';
import DisplayField from '../dumb/DisplayField';
import DisplayTitle from '../dumb/DisplayTitle';

const API_PREFIX = "https://api.iextrading.com/1.0";

class StockInfo extends Component {
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
        const ticker = "msft";
        this.getStockInfo_Company(ticker);
        this.getStockInfo_Quote(ticker);
        this.getStockInfo_News(ticker);
    }

    getStockInfo_Company = async (ticker) => {
        const api_call = await fetch(`${API_PREFIX}/stock/${ticker}/company?filter=symbol,CEO,description`);
        const data = await api_call.json();

        this.setState({
            ticker:data.symbol,
            CEO: data.CEO,
            description: data.description
        })
    }

    getStockInfo_Quote = async (ticker) => {
        const api_call = await fetch(`${API_PREFIX}/stock/${ticker}/quote?filter=latestPrice,latestVolume,marketCap`);
        const data = await api_call.json();

        this.setState({
            price: data.latestPrice,
            volume: data.latestVolume,
            market_cap: data.marketCap
        })
    }

    getStockInfo_News = async (ticker) => {
        const api_call = await fetch(`${API_PREFIX}/stock/${ticker}/news/last/1`);
        const data = await api_call.json();

        this.setState({
            trending_news: data[0].headline
        })
    }

    render() { 
        return ( 
            <div className="stock-info">
                <DisplayTitle value={this.state.ticker}/>
                <DisplayField d_key={"Price"} value={this.state.price}/>
                <DisplayField d_key={"Chart"} value={this.state.chart}/>
                <DisplayField d_key={"Market Cap"} value={this.state.market_cap}/>
                <DisplayField d_key={"Volume"} value={this.state.volume}/>
                <DisplayField d_key={"Description"} value={this.state.description}/>
                <DisplayField d_key={"Trending News"} value={this.state.trending_news}/>
                <DisplayField d_key={"CEO"} value={this.state.CEO} />
                <div>
                    <button onClick={this.getStockInfo}>Generate</button>
                </div>
            </div>
         );
    }
}
 
export default StockInfo;