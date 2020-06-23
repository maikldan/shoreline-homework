import React, {useState} from "react";
import './StockSidebar.scss';

type MyProps = {
    fetchData: Function
};

const StockSidebar: React.FC<MyProps> = ({ fetchData }) => {
    const [symbol, setSymbol] = useState('');
    const [timeInterval, setTimeInterval] = useState('1min');

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h3>Filters</h3>
            </div>
            <div className="sidebar__body">
                <div className="sidebar__body__search">
                    <div className="sidebar__body__search__title">
                        Fill Symbol
                    </div>
                    <div className="sidebar__body__search__input">
                        <input type="text" value={ symbol } onChange={ (e) => setSymbol(e.target.value) }/>
                    </div>
                </div>
                <div className="sidebar__body__search">
                    <div className="sidebar__body__search__title">
                        Select Time Interval
                    </div>
                    <div className="sidebar__body__search__input">
                        <select value={timeInterval} onChange={ (e) => setTimeInterval(e.target.value) }>
                            <option value="1min">1min</option>
                            <option value="5min">5min</option>
                            <option value="15min">15min</option>
                            <option value="60min">60min</option>
                        </select>
                    </div>
                </div>
                <div className="sidebar__body__submit">
                    <button onClick={ () => fetchData({ symbol, timeInterval }) }>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default StockSidebar