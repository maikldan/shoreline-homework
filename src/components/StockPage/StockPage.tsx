import React  from "react";
import StockSidebar from "./StockSidebar";
import './StockPage.scss';
import StockResult from "./StockResult";

type Filter = {
    symbol: string,
    timeInterval: string
}

type MyState = {
    stockChartXValues: string[],
    stockChartYValues: number[]
};

class StockPage extends React.Component<any, MyState> {
    private API_KEY = 'E63FTAJ96SCW8F8X'

    state = {
        stockChartXValues: [],
        stockChartYValues: []
    }

    extractData = (data: any, timeInterval: string) => {
        let stockChartXValues: string[] = [];
        let stockChartYValues: number[] = [];
        if (data.hasOwnProperty(`Time Series (${timeInterval})`)) {
            for (const key in data[`Time Series (${timeInterval})`]) {
                stockChartXValues.push(key);
                stockChartYValues.push(data[`Time Series (${timeInterval})`][key]['1. open']);
            }
        }

        this.setState({
            stockChartXValues,
            stockChartYValues
        })
    }

    fetchData = (filter: Filter) => {
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${filter.symbol}&interval=${filter.timeInterval}&outputsize=compact&apikey=${this.API_KEY}`;
        fetch(API_CALL)
            .then( (res) => res.json() )
            .then( (data) => this.extractData(data, filter.timeInterval) )
    }

    render() {
        const { stockChartXValues, stockChartYValues } = { ...this.state };
        return (
            <div className="stock-page">
                <StockSidebar fetchData={ this.fetchData } />
                { stockChartXValues && stockChartXValues.length > 0 ?
                    <StockResult
                        stockChartXValues={stockChartXValues}
                        stockChartYValues={stockChartYValues}
                    />
                    :
                    <p>Please Select Symbol and Time Interval</p>
                }
            </div>
        );
    }
}

export default StockPage