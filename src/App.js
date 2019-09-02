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

// multi line chart configuration settings
const chartConfigs_multiline = {
    type: "msline",
    width: '100%',
    height: 350,
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: "Cell phones use in any town, 2015 to 2019",
            yaxisname: "% of youth on this platform",
            subcaption: "2015-2019",
            showhovereffect: "1",
            drawcrossline: "1",
            theme: "fusion",

            //Set border color
            showBorder: "1",
            borderColor: "#ccc",
            bgColor: "#FFFFFF",

            //Tooltip customization
            toolTipBorderColor: "#666666",
            toolTipBgColor: "#efefef",
            toolTipBgAlpha: "80",
            showToolTipShadow: "1",

            //Theme
            plotBorderThickness: "0.25",
            showxaxispercentvalues: "1",
            plottooltext: "<b>$dataValue</b> of youth were on $seriesName",
        },
        categories: [
            {
                category: [
                    {
                        label: "2015"
                    },
                    {
                        label: "2016"
                    },
                    {
                        label: "2017"
                    },
                    {
                        label: "2018"
                    },
                    {
                        label: "2019"
                    }
                ]
            }
        ],
        dataset: [
            {
                seriesname: "Men",
                data: [
                    {
                        value: "3000"
                    },
                    {
                        value: "3320"
                    },
                    {
                        value: "3589"
                    },
                    {
                        value: "3600"
                    },
                    {
                        value: "3900"
                    }
                ]
            },
            {
                seriesname: "Women",
                data: [
                    {
                        value: "1400"
                    },
                    {
                        value: "1420"
                    },
                    {
                        value: "1500"
                    },
                    {
                        value: "1520"
                    },
                    {
                        value: "1530"
                    }
                ]
            },
            {
                seriesname: "Both Sex",
                data: [
                    {
                        value: "1230"
                    },
                    {
                        value: "1250"
                    },
                    {
                        value: "1280"
                    },
                    {
                        value: "1450"
                    },
                    {
                        value: "1480"
                    }
                ]
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

                    {/*Multi Line section*/}
                    <div className="col-sm-6">
                        <h3>Line with multiple series Chart</h3>
                        <ReactFC {...chartConfigs_multiline} />
                    </div>
                </div>
            </div>)
    }
}

export default App;
