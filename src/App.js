import React, {Component} from 'react';

// import Fusion Charts library
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import './index.css';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// line chart configuration settings
const chartConfigs_line = {
    type: "line",
    width: '100%',
    height: 350,
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: "Revenue Over Time($k)",
            palettecolors: "f2726f",
            yaxisname: "Month",
            xaxisname: "Revenue",
            subcaption: "[Year 2019]",
            numbersuffix: "k",
            showBorder: "1",
            borderColor: "#ccc",
            bgColor: "#FFFFFF",
            theme: "fusion",
            //Tooltip customization
            toolTipBorderColor: "#666666",
            toolTipBgColor: "#efefef",
            toolTipBgAlpha: "80",
            showToolTipShadow: "1",
            //Theme
            plotBorderThickness: "0.25",
            showxaxispercentvalues: "1",
            showValues: "1",
            plotToolText: "Month: $label <br> Revenue : $dataValue"
        },
        data: [
            {
                label: "Feb",
                value: "450"
            },
            {
                label: "March",
                value: "600"
            },
            {
                label: "April",
                value: "200"
            },
            {
                label: "May",
                value: "180"
            },
            {
                label: "June",
                value: "1100"
            }
        ]
    }
};

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/*Simple Line section*/}
                    <div className="col-sm-6">
                        <h3>Simple Line Chart</h3>
                        <ReactFC {...chartConfigs_line} />
                    </div>
                </div>
            </div>)
    }
}

export default App;
