# Implement Simple Line fusion chart with react app
FusionCharts is a JavaScript charting library which provides more than 95 charts and 2,000 maps which can be use full in mobile and web applications.

## Official Links
  - Website: [https://www.fusioncharts.com](https://www.fusioncharts.com)
  - NPM Package: [https://www.npmjs.com/package/fusioncharts](https://www.npmjs.com/package/fusioncharts)

## Getting Started

**Note:** [NPM](https://www.npmjs.com) or [Yarn](https://yarnpkg.com/lang/en) must be installed globally on your local pc.
 - See [npm documentation](https://docs.npmjs.com/) to know more about npm in detail.
 - See [yarn documentation](https://yarnpkg.com/en/docs) to know more about yarn in detail.
 
## Installation Fusion Chart Library

[Note](#): In demo for designing purpose we used the simple [bootstrap](https://www.npmjs.com/package/bootstrap) library.
 
We will use `react-fusioncharts` component to integrate fusion chart functionality.

**Install from NPM or from Yarn**
 ```
npm install --save react-fusioncharts

or

yarn add react-fusioncharts
```

### Usage

- create react app using your specific app name in desire folder path `create-react-app`
- once you create the react app successfully there will be `app.js` file lies in `src` folder.
- now we need to import `react-fusioncharts` and FusionCharts in your `app.js` file

```
import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import './index.css';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
```

Note: This way of import will not work in IE11 and below.

#### Configuration setting for chart

```
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
            data: []
          }
        }
```

#### Data Source Collection

```
        "data": [
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
```

This sample static data collection need to pass in configuration setting. 

#### Attach the callback to an event through the React-FC component:

```javascript
 <ReactFC {...chartConfigsSettings} /> 
```

##### Consider the example to integrate or implement fusion chart in the react app.

```javascript
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
            yaxisname: "Number of people",
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
```

## Licensing

The FusionCharts React component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FusionCharts library in your page separately, which has a [separate license](https://www.fusioncharts.com/buy).
