import React from "react";
// customizable method: use your own `Plotly` object
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js";
import './StockResult.scss'

const Plot = createPlotlyComponent(Plotly);

type MyProps = {
    stockChartXValues: string[],
    stockChartYValues: number[]
}

const StockResult: React.FC<MyProps> = ({ stockChartXValues, stockChartYValues }) => {

        return (
            <div className="stock-results">
                <Plot
                    data={[
                        {
                            x: stockChartXValues,
                            y: stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                        }
                    ]}
                    layout={ {width: 750, height: 400, title: 'A Fancy Plot'} }
                />
            </div>
        )
}

export default StockResult