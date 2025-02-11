function getChartColorsArray(e) {
    if (null !== document.getElementById(e)) {
        var t = document.getElementById(e).getAttribute("data-colors");
        return (t = JSON.parse(t)).map(function(e) {
            var t = e.replace(" ", "");
            if (-1 == t.indexOf("--")) return t;
            var a = getComputedStyle(document.documentElement).getPropertyValue(t);
            return a || void 0
        })
    }
}
var options = {
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: !1
            },
            toolbar: {
                show: !1
            }
        },
        markers: {
            size: 4
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            curve: "straight"
        },
        colors: barchartColors = getChartColorsArray("line_chart_basic"),
        title: {
            text: "Projected Networth by Month",
            align: "left",
            style: {
                fontWeight: 500
            }
        },
        xaxis: {
            categories: ["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031"]
        }
    },
    chart = new ApexCharts(document.querySelector("#line_chart_basic"), options);
chart.render();
var barchartColors = getChartColorsArray("line_chart_zoomable"),
    options = {
        series: [{
            name: "XYZ MOTORS",
            data: [{
                x: new Date("2018-01-12").getTime(),
                y: 140
            }, {
                x: new Date("2018-01-13").getTime(),
                y: 147
            }, {
                x: new Date("2018-01-14").getTime(),
                y: 150
            }, {
                x: new Date("2018-01-15").getTime(),
                y: 154
            }, {
                x: new Date("2018-01-16").getTime(),
                y: 160
            }, {
                x: new Date("2018-01-17").getTime(),
                y: 165
            }, {
                x: new Date("2018-01-18").getTime(),
                y: 162
            }, {
                x: new Date("2018-01-20").getTime(),
                y: 159
            }, {
                x: new Date("2018-01-21").getTime(),
                y: 164
            }, {
                x: new Date("2018-01-22").getTime(),
                y: 160
            }, {
                x: new Date("2018-01-23").getTime(),
                y: 165
            }, {
                x: new Date("2018-01-24").getTime(),
                y: 169
            }, {
                x: new Date("2018-01-25").getTime(),
                y: 172
            }, {
                x: new Date("2018-01-26").getTime(),
                y: 177
            }, {
                x: new Date("2018-01-27").getTime(),
                y: 173
            }, {
                x: new Date("2018-01-28").getTime(),
                y: 169
            }, {
                x: new Date("2018-01-29").getTime(),
                y: 163
            }, {
                x: new Date("2018-01-30").getTime(),
                y: 158
            }, {
                x: new Date("2018-02-01").getTime(),
                y: 153
            }, {
                x: new Date("2018-02-02").getTime(),
                y: 149
            }, {
                x: new Date("2018-02-03").getTime(),
                y: 144
            }, {
                x: new Date("2018-02-05").getTime(),
                y: 150
            }, {
                x: new Date("2018-02-06").getTime(),
                y: 155
            }, {
                x: new Date("2018-02-07").getTime(),
                y: 159
            }, {
                x: new Date("2018-02-08").getTime(),
                y: 163
            }, {
                x: new Date("2018-02-09").getTime(),
                y: 156
            }, {
                x: new Date("2018-02-11").getTime(),
                y: 151
            }, {
                x: new Date("2018-02-12").getTime(),
                y: 157
            }, {
                x: new Date("2018-02-13").getTime(),
                y: 161
            }, {
                x: new Date("2018-02-14").getTime(),
                y: 150
            }, {
                x: new Date("2018-02-15").getTime(),
                y: 154
            }, {
                x: new Date("2018-02-16").getTime(),
                y: 160
            }, {
                x: new Date("2018-02-17").getTime(),
                y: 165
            }, {
                x: new Date("2018-02-18").getTime(),
                y: 162
            }, {
                x: new Date("2018-02-20").getTime(),
                y: 159
            }, {
                x: new Date("2018-02-21").getTime(),
                y: 164
            }, {
                x: new Date("2018-02-22").getTime(),
                y: 160
            }, {
                x: new Date("2018-02-23").getTime(),
                y: 165
            }, {
                x: new Date("2018-02-24").getTime(),
                y: 169
            }, {
                x: new Date("2018-02-25").getTime(),
                y: 172
            }, {
                x: new Date("2018-02-26").getTime(),
                y: 177
            }, {
                x: new Date("2018-02-27").getTime(),
                y: 173
            }, {
                x: new Date("2018-02-28").getTime(),
                y: 169
            }, {
                x: new Date("2018-02-29").getTime(),
                y: 163
            }, {
                x: new Date("2018-02-30").getTime(),
                y: 162
            }, {
                x: new Date("2018-03-01").getTime(),
                y: 158
            }, {
                x: new Date("2018-03-02").getTime(),
                y: 152
            }, {
                x: new Date("2018-03-03").getTime(),
                y: 147
            }, {
                x: new Date("2018-03-05").getTime(),
                y: 142
            }, {
                x: new Date("2018-03-06").getTime(),
                y: 147
            }, {
                x: new Date("2018-03-07").getTime(),
                y: 151
            }, {
                x: new Date("2018-03-08").getTime(),
                y: 155
            }, {
                x: new Date("2018-03-09").getTime(),
                y: 159
            }, {
                x: new Date("2018-03-11").getTime(),
                y: 162
            }, {
                x: new Date("2018-03-12").getTime(),
                y: 157
            }, {
                x: new Date("2018-03-13").getTime(),
                y: 161
            }, {
                x: new Date("2018-03-14").getTime(),
                y: 166
            }, {
                x: new Date("2018-03-15").getTime(),
                y: 169
            }, {
                x: new Date("2018-03-16").getTime(),
                y: 172
            }, {
                x: new Date("2018-03-17").getTime(),
                y: 177
            }, {
                x: new Date("2018-03-18").getTime(),
                y: 181
            }, {
                x: new Date("2018-03-20").getTime(),
                y: 178
            }, {
                x: new Date("2018-03-21").getTime(),
                y: 173
            }, {
                x: new Date("2018-03-22").getTime(),
                y: 169
            }, {
                x: new Date("2018-03-23").getTime(),
                y: 163
            }, {
                x: new Date("2018-03-24").getTime(),
                y: 159
            }, {
                x: new Date("2018-03-25").getTime(),
                y: 164
            }, {
                x: new Date("2018-03-26").getTime(),
                y: 168
            }, {
                x: new Date("2018-03-27").getTime(),
                y: 172
            }, {
                x: new Date("2018-03-28").getTime(),
                y: 169
            }, {
                x: new Date("2018-03-29").getTime(),
                y: 163
            }, {
                x: new Date("2018-03-30").getTime(),
                y: 162
            }, {
                x: new Date("2018-04-01").getTime(),
                y: 158
            }, {
                x: new Date("2018-04-02").getTime(),
                y: 152
            }, {
                x: new Date("2018-04-03").getTime(),
                y: 147
            }, {
                x: new Date("2018-04-05").getTime(),
                y: 142
            }, {
                x: new Date("2018-04-06").getTime(),
                y: 147
            }, {
                x: new Date("2018-04-07").getTime(),
                y: 151
            }, {
                x: new Date("2018-04-08").getTime(),
                y: 155
            }, {
                x: new Date("2018-04-09").getTime(),
                y: 159
            }, {
                x: new Date("2018-04-11").getTime(),
                y: 162
            }, {
                x: new Date("2018-04-12").getTime(),
                y: 157
            }, {
                x: new Date("2018-04-13").getTime(),
                y: 161
            }, {
                x: new Date("2018-04-14").getTime(),
                y: 166
            }, {
                x: new Date("2018-04-15").getTime(),
                y: 169
            }, {
                x: new Date("2018-04-16").getTime(),
                y: 172
            }, {
                x: new Date("2018-04-17").getTime(),
                y: 177
            }, {
                x: new Date("2018-04-18").getTime(),
                y: 181
            }, {
                x: new Date("2018-04-20").getTime(),
                y: 178
            }, {
                x: new Date("2018-04-21").getTime(),
                y: 173
            }, {
                x: new Date("2018-04-22").getTime(),
                y: 169
            }, {
                x: new Date("2018-04-23").getTime(),
                y: 163
            }, {
                x: new Date("2018-04-24").getTime(),
                y: 159
            }, {
                x: new Date("2018-04-25").getTime(),
                y: 164
            }, {
                x: new Date("2018-04-26").getTime(),
                y: 168
            }, {
                x: new Date("2018-04-27").getTime(),
                y: 172
            }, {
                x: new Date("2018-04-28").getTime(),
                y: 169
            }, {
                x: new Date("2018-04-29").getTime(),
                y: 163
            }, {
                x: new Date("2018-04-30").getTime(),
                y: 162
            }, {
                x: new Date("2018-05-01").getTime(),
                y: 158
            }, {
                x: new Date("2018-05-02").getTime(),
                y: 152
            }, {
                x: new Date("2018-05-03").getTime(),
                y: 147
            }, {
                x: new Date("2018-05-04").getTime(),
                y: 142
            }, {
                x: new Date("2018-05-05").getTime(),
                y: 147
            }, {
                x: new Date("2018-05-07").getTime(),
                y: 151
            }, {
                x: new Date("2018-05-08").getTime(),
                y: 155
            }, {
                x: new Date("2018-05-09").getTime(),
                y: 159
            }, {
                x: new Date("2018-05-11").getTime(),
                y: 162
            }, {
                x: new Date("2018-05-12").getTime(),
                y: 157
            }, {
                x: new Date("2018-05-13").getTime(),
                y: 161
            }, {
                x: new Date("2018-05-14").getTime(),
                y: 166
            }, {
                x: new Date("2018-05-15").getTime(),
                y: 169
            }, {
                x: new Date("2018-05-16").getTime(),
                y: 172
            }, {
                x: new Date("2018-05-17").getTime(),
                y: 177
            }, {
                x: new Date("2018-05-18").getTime(),
                y: 181
            }, {
                x: new Date("2018-05-20").getTime(),
                y: 178
            }, {
                x: new Date("2018-05-21").getTime(),
                y: 173
            }, {
                x: new Date("2018-05-22").getTime(),
                y: 169
            }, {
                x: new Date("2018-05-23").getTime(),
                y: 163
            }, {
                x: new Date("2018-05-24").getTime(),
                y: 159
            }, {
                x: new Date("2018-05-25").getTime(),
                y: 164
            }, {
                x: new Date("2018-05-26").getTime(),
                y: 168
            }, {
                x: new Date("2018-05-27").getTime(),
                y: 172
            }, {
                x: new Date("2018-05-28").getTime(),
                y: 169
            }, {
                x: new Date("2018-05-29").getTime(),
                y: 163
            }, {
                x: new Date("2018-05-30").getTime(),
                y: 162
            }]
        }],
        chart: {
            type: "area",
            stacked: !1,
            height: 350,
            zoom: {
                type: "x",
                enabled: !0,
                autoScaleYaxis: !0
            },
            toolbar: {
                autoSelected: "zoom"
            }
        },
        colors: barchartColors,
        dataLabels: {
            enabled: !1
        },
        markers: {
            size: 0
        },
        title: {
            text: "Stock Price Movement",
            align: "left",
            style: {
                fontWeight: 500
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .5,
                opacityTo: 0,
                stops: [0, 90, 100]
            }
        },
        yaxis: {
            showAlways: !0,
            labels: {
                show: !0,
                formatter: function(e) {
                    return (e / 1e6).toFixed(0)
                }
            },
            title: {
                text: "Price",
                style: {
                    fontWeight: 500
                }
            }
        },
        xaxis: {
            type: "datetime"
        },
        tooltip: {
            shared: !1,
            y: {
                formatter: function(e) {
                    return (e / 1e6).toFixed(0)
                }
            }
        }
    };
(chart = new ApexCharts(document.querySelector("#line_chart_zoomable"), options)).render();
barchartColors = getChartColorsArray("area_chart_basic"), options = {
    series: [{
        name: "Networth",
        data: series.monthDataSeries1.prices
    }],
    chart: {
        type: "area",
        height: 350,
        zoom: {
            enabled: !1
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        curve: "straight"
    },
    title: {
        text: "Fundamental Analysis of Stocks",
        align: "left",
        style: {
            fontWeight: 500
        }
    },
    subtitle: {
        text: "Price Movements",
        align: "left"
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        opposite: !0
    },
    legend: {
        horizontalAlign: "left"
    },
    colors: barchartColors
};
(chart = new ApexCharts(document.querySelector("#area_chart_basic"), options)).render();
options = {
    series: [{
        name: "Actual",
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: "Projected",
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
        height: 350,
        type: "area"
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        curve: "smooth"
    },
    colors: barchartColors = getChartColorsArray("area_chart_spline"),
    xaxis: {
        type: "date",
        categories: ["2022-10-14", "2023-10-14", "2024-09-19", "2025-09-19", "2026-09-19", "2027-09-19", "2028-09-19"]
    },
    tooltip: {
        x: {
            format: "dd/MM/yy"
        }
    }
};
(chart = new ApexCharts(document.querySelector("#area_chart_spline"), options)).render();
options = {
    chart: {
        height: 350,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "45%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 2,
        colors: ["transparent"]
    },
    series: [{
        name: "Net Profit",
        data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
    }, {
        name: "Revenue",
        data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
    }, {
        name: "Free Cash Flow",
        data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
    }],
    colors: barchartColors = getChartColorsArray("column_chart"),
    xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
    },
    yaxis: {
        title: {
            text: "$ (thousands)"
        }
    },
    grid: {
        borderColor: "#f1f1f1"
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function(e) {
                return "$ " + e + " thousands"
            }
        }
    }
};
(chart = new ApexCharts(document.querySelector("#column_chart"), options)).render();
options = {
    chart: {
        height: 350,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                position: "top"
            }
        }
    },
    dataLabels: {
        enabled: !0,
        formatter: function(e) {
            return e + "%"
        },
        offsetY: -20,
        style: {
            fontSize: "12px",
            colors: ["#adb5bd"]
        }
    },
    series: [{
        name: "Inflation",
        data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, .8]
    }],
    colors: barchartColors = getChartColorsArray("column_chart_datalabel"),
    grid: {
        borderColor: "#f1f1f1"
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        labels: {
            offsetY: -18
        },
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        },
        crosshairs: {
            fill: {
                type: "gradient",
                gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    stops: [0, 100],
                    opacityFrom: .4,
                    opacityTo: .5
                }
            }
        },
        tooltip: {
            enabled: !0,
            offsetY: -35
        }
    },
    fill: {
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: .25,
            gradientToColors: void 0,
            inverseColors: !0,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
        }
    },
    yaxis: {
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        },
        labels: {
            show: !1,
            formatter: function(e) {
                return e + "%"
            }
        }
    },
    title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: !0,
        offsetY: 320,
        align: "center",
        style: {
            fontWeight: 500
        }
    }
};
(chart = new ApexCharts(document.querySelector("#column_chart_datalabel"), options)).render();
options = {
    chart: {
        height: 350,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0
        }
    },
    dataLabels: {
        enabled: !1
    },
    series: [{
        data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
    }],
    colors: barchartColors = getChartColorsArray("bar_chart"),
    grid: {
        borderColor: "#f1f1f1"
    },
    xaxis: {
        categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
    }
};
(chart = new ApexCharts(document.querySelector("#bar_chart"), options)).render();
options = {
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    chart: {
        type: "bar",
        height: 350,
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            barHeight: "100%",
            distributed: !0,
            horizontal: !0,
            dataLabels: {
                position: "bottom"
            }
        }
    },
    colors: barchartColors = getChartColorsArray("custom_datalabels_bar"),
    dataLabels: {
        enabled: !0,
        textAnchor: "start",
        style: {
            colors: ["#fff"]
        },
        formatter: function(e, t) {
            return t.w.globals.labels[t.dataPointIndex] + ":  " + e
        },
        offsetX: 0,
        dropShadow: {
            enabled: !1
        }
    },
    stroke: {
        width: 1,
        colors: ["#fff"]
    },
    xaxis: {
        categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "India"]
    },
    yaxis: {
        labels: {
            show: !1
        }
    },
    title: {
        text: "Custom DataLabels",
        align: "center",
        floating: !0,
        style: {
            fontWeight: 600
        }
    },
    subtitle: {
        text: "Category Names as DataLabels inside bars",
        align: "center"
    },
    tooltip: {
        theme: "dark",
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function() {
                    return ""
                }
            }
        }
    }
};
(chart = new ApexCharts(document.querySelector("#custom_datalabels_bar"), options)).render();
options = {
    series: [{
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    chart: {
        height: 350,
        type: "line",
        toolbar: {
            show: !1
        }
    },
    stroke: {
        width: [0, 4]
    },
    title: {
        text: "Traffic Sources",
        style: {
            fontWeight: 600
        }
    },
    dataLabels: {
        enabled: !0,
        enabledOnSeries: [1]
    },
    labels: ["01 Jan 2001", "02 Jan 2001", "03 Jan 2001", "04 Jan 2001", "05 Jan 2001", "06 Jan 2001", "07 Jan 2001", "08 Jan 2001", "09 Jan 2001", "10 Jan 2001", "11 Jan 2001", "12 Jan 2001"],
    xaxis: {
        type: "datetime"
    },
    yaxis: [{
        title: {
            text: "Website Blog",
            style: {
                fontWeight: 600
            }
        }
    }, {
        opposite: !0,
        title: {
            text: "Social Media",
            style: {
                fontWeight: 600
            }
        }
    }],
    colors: barchartColors = getChartColorsArray("line_column_chart")
};
(chart = new ApexCharts(document.querySelector("#line_column_chart"), options)).render();
options = {
    series: [{
        name: "Income",
        type: "column",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
        name: "Cashflow",
        type: "column",
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
        name: "Revenue",
        type: "line",
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    chart: {
        height: 350,
        type: "line",
        stacked: !1,
        toolbar: {
            show: !1
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        width: [1, 1, 4]
    },
    title: {
        text: "XYZ - Stock Analysis (2009 - 2016)",
        align: "left",
        offsetX: 110,
        style: {
            fontWeight: 600
        }
    },
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    yaxis: [{
        axisTicks: {
            show: !0
        },
        axisBorder: {
            show: !0,
            color: "#038edc"
        },
        labels: {
            style: {
                colors: "#038edc"
            }
        },
        title: {
            text: "Income (thousand crores)",
            style: {
                color: "#038edc",
                fontWeight: 600
            }
        },
        tooltip: {
            enabled: !0
        }
    }, {
        seriesName: "Income",
        opposite: !0,
        axisTicks: {
            show: !0
        },
        axisBorder: {
            show: !0,
            color: "#038edc"
        },
        labels: {
            style: {
                colors: "#038edc"
            }
        },
        title: {
            text: "Operating Cashflow (thousand crores)",
            style: {
                color: "#038edc",
                fontWeight: 600
            }
        }
    }, {
        seriesName: "Revenue",
        opposite: !0,
        axisTicks: {
            show: !0
        },
        axisBorder: {
            show: !0,
            color: "#51d28c"
        },
        labels: {
            style: {
                colors: "#51d28c"
            }
        },
        title: {
            text: "Revenue (thousand crores)",
            style: {
                color: "#51d28c",
                fontWeight: 600
            }
        }
    }],
    tooltip: {
        fixed: {
            enabled: !0,
            position: "topLeft",
            offsetY: 30,
            offsetX: 60
        }
    },
    legend: {
        horizontalAlign: "left",
        offsetX: 40
    },
    colors: barchartColors = getChartColorsArray("multi_chart")
};
(chart = new ApexCharts(document.querySelector("#multi_chart"), options)).render();
barchartColors = getChartColorsArray("basic_timeline"), options = {
    series: [{
        data: [{
            x: "Code",
            y: [new Date("2019-03-02").getTime(), new Date("2019-03-04").getTime()]
        }, {
            x: "Test",
            y: [new Date("2019-03-04").getTime(), new Date("2019-03-08").getTime()]
        }, {
            x: "Validation",
            y: [new Date("2019-03-08").getTime(), new Date("2019-03-12").getTime()]
        }, {
            x: "Deployment",
            y: [new Date("2019-03-12").getTime(), new Date("2019-03-18").getTime()]
        }]
    }],
    chart: {
        height: 350,
        type: "rangeBar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0
        }
    },
    xaxis: {
        type: "datetime"
    },
    colors: barchartColors
};
(chart = new ApexCharts(document.querySelector("#basic_timeline"), options)).render();
barchartColors = getChartColorsArray("color_timeline"), options = {
    series: [{
        data: [{
            x: "Analysis",
            y: [new Date("2019-02-27").getTime(), new Date("2019-03-04").getTime()],
            fillColor: barchartColors[0]
        }, {
            x: "Design",
            y: [new Date("2019-03-04").getTime(), new Date("2019-03-08").getTime()],
            fillColor: barchartColors[1]
        }, {
            x: "Coding",
            y: [new Date("2019-03-07").getTime(), new Date("2019-03-10").getTime()],
            fillColor: barchartColors[2]
        }, {
            x: "Testing",
            y: [new Date("2019-03-08").getTime(), new Date("2019-03-12").getTime()],
            fillColor: barchartColors[3]
        }, {
            x: "Deployment",
            y: [new Date("2019-03-12").getTime(), new Date("2019-03-17").getTime()],
            fillColor: barchartColors[4]
        }]
    }],
    chart: {
        height: 330,
        type: "rangeBar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0,
            distributed: !0,
            dataLabels: {
                hideOverflowingLabels: !1
            }
        }
    },
    dataLabels: {
        enabled: !0,
        formatter: function(e, t) {
            var a = t.w.globals.labels[t.dataPointIndex],
                r = moment(e[0]),
                o = moment(e[1]).diff(r, "days");
            return a + ": " + o + (1 < o ? " days" : " day")
        }
    },
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        show: !0
    }
};
(chart = new ApexCharts(document.querySelector("#color_timeline"), options)).render();
barchartColors = getChartColorsArray("basic_candlestick"), options = {
    series: [{
        data: [{
            x: new Date(15387786e5),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
        }, {
            x: new Date(15387804e5),
            y: [6632.01, 6643.59, 6620, 6630.11]
        }, {
            x: new Date(15387822e5),
            y: [6630.71, 6648.95, 6623.34, 6635.65]
        }, {
            x: new Date(1538784e6),
            y: [6635.65, 6651, 6629.67, 6638.24]
        }, {
            x: new Date(15387858e5),
            y: [6638.24, 6640, 6620, 6624.47]
        }, {
            x: new Date(15387876e5),
            y: [6624.53, 6636.03, 6621.68, 6624.31]
        }, {
            x: new Date(15387894e5),
            y: [6624.61, 6632.2, 6617, 6626.02]
        }, {
            x: new Date(15387912e5),
            y: [6627, 6627.62, 6584.22, 6603.02]
        }, {
            x: new Date(1538793e6),
            y: [6605, 6608.03, 6598.95, 6604.01]
        }, {
            x: new Date(15387948e5),
            y: [6604.5, 6614.4, 6602.26, 6608.02]
        }, {
            x: new Date(15387966e5),
            y: [6608.02, 6610.68, 6601.99, 6608.91]
        }, {
            x: new Date(15387984e5),
            y: [6608.91, 6618.99, 6608.01, 6612]
        }, {
            x: new Date(15388002e5),
            y: [6612, 6615.13, 6605.09, 6612]
        }, {
            x: new Date(1538802e6),
            y: [6612, 6624.12, 6608.43, 6622.95]
        }, {
            x: new Date(15388038e5),
            y: [6623.91, 6623.91, 6615, 6615.67]
        }, {
            x: new Date(15388056e5),
            y: [6618.69, 6618.74, 6610, 6610.4]
        }, {
            x: new Date(15388074e5),
            y: [6611, 6622.78, 6610.4, 6614.9]
        }, {
            x: new Date(15388092e5),
            y: [6614.9, 6626.2, 6613.33, 6623.45]
        }, {
            x: new Date(1538811e6),
            y: [6623.48, 6627, 6618.38, 6620.35]
        }, {
            x: new Date(15388128e5),
            y: [6619.43, 6620.35, 6610.05, 6615.53]
        }, {
            x: new Date(15388146e5),
            y: [6615.53, 6617.93, 6610, 6615.19]
        }, {
            x: new Date(15388164e5),
            y: [6615.19, 6621.6, 6608.2, 6620]
        }, {
            x: new Date(15388182e5),
            y: [6619.54, 6625.17, 6614.15, 6620]
        }, {
            x: new Date(153882e7),
            y: [6620.33, 6634.15, 6617.24, 6624.61]
        }, {
            x: new Date(15388218e5),
            y: [6625.95, 6626, 6611.66, 6617.58]
        }, {
            x: new Date(15388236e5),
            y: [6619, 6625.97, 6595.27, 6598.86]
        }, {
            x: new Date(15388254e5),
            y: [6598.86, 6598.88, 6570, 6587.16]
        }, {
            x: new Date(15388272e5),
            y: [6588.86, 6600, 6580, 6593.4]
        }, {
            x: new Date(1538829e6),
            y: [6593.99, 6598.89, 6585, 6587.81]
        }, {
            x: new Date(15388308e5),
            y: [6587.81, 6592.73, 6567.14, 6578]
        }, {
            x: new Date(15388326e5),
            y: [6578.35, 6581.72, 6567.39, 6579]
        }, {
            x: new Date(15388344e5),
            y: [6579.38, 6580.92, 6566.77, 6575.96]
        }, {
            x: new Date(15388362e5),
            y: [6575.96, 6589, 6571.77, 6588.92]
        }, {
            x: new Date(1538838e6),
            y: [6588.92, 6594, 6577.55, 6589.22]
        }, {
            x: new Date(15388398e5),
            y: [6589.3, 6598.89, 6589.1, 6596.08]
        }, {
            x: new Date(15388416e5),
            y: [6597.5, 6600, 6588.39, 6596.25]
        }, {
            x: new Date(15388434e5),
            y: [6598.03, 6600, 6588.73, 6595.97]
        }, {
            x: new Date(15388452e5),
            y: [6595.97, 6602.01, 6588.17, 6602]
        }, {
            x: new Date(1538847e6),
            y: [6602, 6607, 6596.51, 6599.95]
        }, {
            x: new Date(15388488e5),
            y: [6600.63, 6601.21, 6590.39, 6591.02]
        }, {
            x: new Date(15388506e5),
            y: [6591.02, 6603.08, 6591, 6591]
        }, {
            x: new Date(15388524e5),
            y: [6591, 6601.32, 6585, 6592]
        }, {
            x: new Date(15388542e5),
            y: [6593.13, 6596.01, 6590, 6593.34]
        }, {
            x: new Date(1538856e6),
            y: [6593.34, 6604.76, 6582.63, 6593.86]
        }, {
            x: new Date(15388578e5),
            y: [6593.86, 6604.28, 6586.57, 6600.01]
        }, {
            x: new Date(15388596e5),
            y: [6601.81, 6603.21, 6592.78, 6596.25]
        }, {
            x: new Date(15388614e5),
            y: [6596.25, 6604.2, 6590, 6602.99]
        }, {
            x: new Date(15388632e5),
            y: [6602.99, 6606, 6584.99, 6587.81]
        }, {
            x: new Date(1538865e6),
            y: [6587.81, 6595, 6583.27, 6591.96]
        }, {
            x: new Date(15388668e5),
            y: [6591.97, 6596.07, 6585, 6588.39]
        }, {
            x: new Date(15388686e5),
            y: [6587.6, 6598.21, 6587.6, 6594.27]
        }, {
            x: new Date(15388704e5),
            y: [6596.44, 6601, 6590, 6596.55]
        }, {
            x: new Date(15388722e5),
            y: [6598.91, 6605, 6596.61, 6600.02]
        }, {
            x: new Date(1538874e6),
            y: [6600.55, 6605, 6589.14, 6593.01]
        }, {
            x: new Date(15388758e5),
            y: [6593.15, 6605, 6592, 6603.06]
        }, {
            x: new Date(15388776e5),
            y: [6603.07, 6604.5, 6599.09, 6603.89]
        }, {
            x: new Date(15388794e5),
            y: [6604.44, 6604.44, 6600, 6603.5]
        }, {
            x: new Date(15388812e5),
            y: [6603.5, 6603.99, 6597.5, 6603.86]
        }, {
            x: new Date(1538883e6),
            y: [6603.85, 6605, 6600, 6604.07]
        }, {
            x: new Date(15388848e5),
            y: [6604.98, 6606, 6604.07, 6606]
        }]
    }],
    chart: {
        type: "candlestick",
        height: 350,
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: barchartColors[0],
                downward: barchartColors[1]
            }
        }
    },
    title: {
        text: "CandleStick Chart",
        align: "left",
        style: {
            fontWeight: 600
        }
    },
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        tooltip: {
            enabled: !0
        }
    }
};
(chart = new ApexCharts(document.querySelector("#basic_candlestick"), options)).render();
barchartColors = getChartColorsArray("combo_candlestick"), options = {
    series: [{
        data: seriesData
    }],
    chart: {
        type: "candlestick",
        height: 200,
        id: "candles",
        toolbar: {
            autoSelected: "pan",
            show: !1
        },
        zoom: {
            enabled: !1
        }
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: barchartColors[0],
                downward: barchartColors[1]
            }
        }
    },
    xaxis: {
        type: "datetime"
    }
};
(chart = new ApexCharts(document.querySelector("#combo_candlestick"), options)).render();
var barchartColors = getChartColorsArray("combo_candlestick_chart"),
    optionsBar = {
        series: [{
            name: "volume",
            data: seriesDataLinear
        }],
        chart: {
            height: 150,
            type: "bar",
            brush: {
                enabled: !0,
                target: "candles"
            },
            selection: {
                enabled: !0,
                xaxis: {
                    min: new Date("20 Jan 2017").getTime(),
                    max: new Date("10 Dec 2017").getTime()
                },
                fill: {
                    color: "#ccc",
                    opacity: .4
                },
                stroke: {
                    color: "#0d47a1"
                }
            }
        },
        dataLabels: {
            enabled: !1
        },
        plotOptions: {
            bar: {
                columnWidth: "80%",
                colors: {
                    ranges: [{
                        from: -1e3,
                        to: 0,
                        color: barchartColors[0]
                    }, {
                        from: 1,
                        to: 1e4,
                        color: barchartColors[1]
                    }]
                }
            }
        },
        stroke: {
            width: 0
        },
        xaxis: {
            type: "datetime",
            axisBorder: {
                offsetX: 13
            }
        },
        yaxis: {
            labels: {
                show: !1
            }
        }
    },
    chartBar = new ApexCharts(document.querySelector("#combo_candlestick_chart"), optionsBar);
chartBar.render();
options = {
    series: [{
        type: "boxPlot",
        data: [{
            x: "Jan 2015",
            y: [54, 66, 69, 75, 88]
        }, {
            x: "Jan 2016",
            y: [43, 65, 69, 76, 81]
        }, {
            x: "Jan 2017",
            y: [31, 39, 45, 51, 59]
        }, {
            x: "Jan 2018",
            y: [39, 46, 55, 65, 71]
        }, {
            x: "Jan 2019",
            y: [29, 31, 35, 39, 44]
        }, {
            x: "Jan 2020",
            y: [41, 49, 58, 61, 67]
        }, {
            x: "Jan 2021",
            y: [54, 59, 66, 71, 88]
        }]
    }],
    chart: {
        type: "boxPlot",
        height: 350,
        toolbar: {
            show: !1
        }
    },
    title: {
        text: "Basic BoxPlot Chart",
        align: "left",
        style: {
            fontWeight: 500
        }
    },
    plotOptions: {
        boxPlot: {
            colors: {
                upper: (barchartColors = getChartColorsArray("basic_box"))[0],
                lower: barchartColors[1]
            }
        }
    }
};
(chart = new ApexCharts(document.querySelector("#basic_box"), options)).render();
barchartColors = getChartColorsArray("box_plot"), options = {
    series: [{
        name: "Box",
        type: "boxPlot",
        data: [{
            x: new Date("2017-01-01").getTime(),
            y: [54, 66, 69, 75, 88]
        }, {
            x: new Date("2018-01-01").getTime(),
            y: [43, 65, 69, 76, 81]
        }, {
            x: new Date("2019-01-01").getTime(),
            y: [31, 39, 45, 51, 59]
        }, {
            x: new Date("2020-01-01").getTime(),
            y: [39, 46, 55, 65, 71]
        }, {
            x: new Date("2021-01-01").getTime(),
            y: [29, 31, 35, 39, 44]
        }]
    }, {
        name: "Outliers",
        type: "scatter",
        data: [{
            x: new Date("2017-01-01").getTime(),
            y: 32
        }, {
            x: new Date("2018-01-01").getTime(),
            y: 25
        }, {
            x: new Date("2019-01-01").getTime(),
            y: 64
        }, {
            x: new Date("2020-01-01").getTime(),
            y: 27
        }, {
            x: new Date("2020-01-01").getTime(),
            y: 78
        }, {
            x: new Date("2021-01-01").getTime(),
            y: 15
        }]
    }],
    chart: {
        type: "boxPlot",
        height: 350,
        toolbar: {
            show: !1
        }
    },
    colors: barchartColors,
    title: {
        text: "BoxPlot - Scatter Chart",
        align: "left",
        style: {
            fontWeight: 500
        }
    },
    xaxis: {
        type: "datetime",
        tooltip: {
            formatter: function(e) {
                return new Date(e).getFullYear()
            }
        }
    },
    plotOptions: {
        boxPlot: {
            colors: {
                upper: barchartColors[0],
                lower: barchartColors[1]
            }
        }
    },
    tooltip: {
        shared: !1,
        intersect: !0
    }
};

function generateData(e, t, a) {
    for (var r = 0, o = []; r < t;) {
        var n = Math.floor(750 * Math.random()) + 1,
            i = Math.floor(Math.random() * (a.max - a.min + 1)) + a.min,
            s = Math.floor(61 * Math.random()) + 15;
        o.push([n, i, s]), r++
    }
    return o
}(chart = new ApexCharts(document.querySelector("#box_plot"), options)).render();
barchartColors = getChartColorsArray("simple_bubble"), options = {
    series: [{
        name: "Bubble1",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
        })
    }, {
        name: "Bubble2",
        data: generateData(new Date("12 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
        })
    }, {
        name: "Bubble3",
        data: generateData(new Date("13 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
        })
    }, {
        name: "Bubble4",
        data: generateData(new Date("14 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    chart: {
        height: 350,
        type: "bubble",
        toolbar: {
            show: !1
        }
    },
    dataLabels: {
        enabled: !1
    },
    fill: {
        opacity: .8
    },
    title: {
        text: "Simple Bubble Chart",
        style: {
            fontWeight: 500
        }
    },
    xaxis: {
        tickAmount: 12,
        type: "category"
    },
    yaxis: {
        max: 70
    },
    colors: barchartColors
};
(chart = new ApexCharts(document.querySelector("#simple_bubble"), options)).render();
barchartColors = getChartColorsArray("bubble_chart"), options = {
    series: [{
        name: "Product1",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
        })
    }, {
        name: "Product2",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
        })
    }, {
        name: "Product3",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
        })
    }, {
        name: "Product4",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    chart: {
        height: 350,
        type: "bubble",
        toolbar: {
            show: !1
        }
    },
    dataLabels: {
        enabled: !1
    },
    fill: {
        type: "gradient"
    },
    title: {
        text: "3D Bubble Chart",
        style: {
            fontWeight: 500
        }
    },
    xaxis: {
        tickAmount: 12,
        type: "datetime",
        labels: {
            rotate: 0
        }
    },
    yaxis: {
        max: 70
    },
    theme: {
        palette: "palette2"
    },
    colors: barchartColors
};
(chart = new ApexCharts(document.querySelector("#bubble_chart"), options)).render();
options = {
    series: [{
        name: "SAMPLE A",
        data: [
            [16.4, 5.4],
            [21.7, 2],
            [25.4, 3],
            [19, 2],
            [10.9, 1],
            [13.6, 3.2],
            [10.9, 7.4],
            [10.9, 0],
            [10.9, 8.2],
            [16.4, 0],
            [16.4, 1.8],
            [13.6, .3],
            [13.6, 0],
            [29.9, 0],
            [27.1, 2.3],
            [16.4, 0],
            [13.6, 3.7],
            [10.9, 5.2],
            [16.4, 6.5],
            [10.9, 0],
            [24.5, 7.1],
            [10.9, 0],
            [8.1, 4.7],
            [19, 0],
            [21.7, 1.8],
            [27.1, 0],
            [24.5, 0],
            [27.1, 0],
            [29.9, 1.5],
            [27.1, .8],
            [22.1, 2]
        ]
    }, {
        name: "SAMPLE B",
        data: [
            [36.4, 13.4],
            [1.7, 11],
            [5.4, 8],
            [9, 17],
            [1.9, 4],
            [3.6, 12.2],
            [1.9, 14.4],
            [1.9, 9],
            [1.9, 13.2],
            [1.4, 7],
            [6.4, 8.8],
            [3.6, 4.3],
            [1.6, 10],
            [9.9, 2],
            [7.1, 15],
            [1.4, 0],
            [3.6, 13.7],
            [1.9, 15.2],
            [6.4, 16.5],
            [.9, 10],
            [4.5, 17.1],
            [10.9, 10],
            [.1, 14.7],
            [9, 10],
            [12.7, 11.8],
            [2.1, 10],
            [2.5, 10],
            [27.1, 10],
            [2.9, 11.5],
            [7.1, 10.8],
            [2.1, 12]
        ]
    }, {
        name: "SAMPLE C",
        data: [
            [21.7, 3],
            [23.6, 3.5],
            [24.6, 3],
            [29.9, 3],
            [21.7, 20],
            [23, 2],
            [10.9, 3],
            [28, 4],
            [27.1, .3],
            [16.4, 4],
            [13.6, 0],
            [19, 5],
            [22.4, 3],
            [24.5, 3],
            [32.6, 3],
            [27.1, 4],
            [29.6, 6],
            [31.6, 8],
            [21.6, 5],
            [20.9, 4],
            [22.4, 0],
            [32.6, 10.3],
            [29.7, 20.8],
            [24.5, .8],
            [21.4, 0],
            [21.7, 6.9],
            [28.6, 7.7],
            [15.4, 0],
            [18.1, 0],
            [33.4, 0],
            [16.4, 0]
        ]
    }],
    chart: {
        height: 350,
        type: "scatter",
        zoom: {
            enabled: !0,
            type: "xy"
        },
        toolbar: {
            show: !1
        }
    },
    xaxis: {
        tickAmount: 10,
        labels: {
            formatter: function(e) {
                return parseFloat(e).toFixed(1)
            }
        }
    },
    yaxis: {
        tickAmount: 7
    },
    colors: barchartColors = getChartColorsArray("basic_scatter")
};

function generateDayWiseTimeSeries(e, t, a) {
    for (var r = 0, o = []; r < t;) {
        var n = Math.floor(Math.random() * (a.max - a.min + 1)) + a.min;
        o.push([e, n]), e += 864e5, r++
    }
    return o
}(chart = new ApexCharts(document.querySelector("#basic_scatter"), options)).render();
options = {
    series: [{
        name: "User A",
        data: [
            [16.4, 5.4],
            [21.7, 4],
            [25.4, 3],
            [19, 2],
            [10.9, 1],
            [13.6, 3.2],
            [10.9, 7],
            [10.9, 8.2],
            [16.4, 4],
            [13.6, 4.3],
            [13.6, 12],
            [29.9, 3],
            [10.9, 5.2],
            [16.4, 6.5],
            [10.9, 8],
            [24.5, 7.1],
            [10.9, 7],
            [8.1, 4.7]
        ]
    }, {
        name: "User B",
        data: [
            [6.4, 5.4],
            [11.7, 4],
            [15.4, 3],
            [9, 2],
            [10.9, 11],
            [20.9, 7],
            [12.9, 8.2],
            [6.4, 14],
            [11.6, 12]
        ]
    }],
    chart: {
        height: 350,
        type: "scatter",
        animations: {
            enabled: !1
        },
        zoom: {
            enabled: !1
        },
        toolbar: {
            show: !1
        }
    },
    colors: barchartColors = getChartColorsArray("images_scatter"),
    xaxis: {
        tickAmount: 10,
        min: 0,
        max: 40
    },
    yaxis: {
        tickAmount: 7
    },
    markers: {
        size: 20
    },
    fill: {
        type: "image",
        opacity: 1,
        image: {
            src: ["./assets/images/users/avatar-5.jpg", "./assets/images/users/avatar-3.jpg"],
            width: 40,
            height: 40
        }
    },
    legend: {
        labels: {
            useSeriesColors: !0
        },
        markers: {
            customHTML: [function() {
                return ""
            }, function() {
                return ""
            }]
        }
    }
};
(chart = new ApexCharts(document.querySelector("#images_scatter"), options)).render();
options = {
    series: [{
        data: [{
            x: "New Delhi",
            y: 218
        }, {
            x: "Kolkata",
            y: 149
        }, {
            x: "Mumbai",
            y: 184
        }, {
            x: "Ahmedabad",
            y: 55
        }, {
            x: "Bangaluru",
            y: 84
        }, {
            x: "Pune",
            y: 31
        }, {
            x: "Chennai",
            y: 70
        }, {
            x: "Jaipur",
            y: 30
        }, {
            x: "Surat",
            y: 44
        }, {
            x: "Hyderabad",
            y: 68
        }, {
            x: "Lucknow",
            y: 28
        }, {
            x: "Indore",
            y: 19
        }, {
            x: "Kanpur",
            y: 29
        }]
    }],
    legend: {
        show: !1
    },
    chart: {
        height: 350,
        type: "treemap",
        toolbar: {
            show: !1
        }
    },
    colors: barchartColors = getChartColorsArray("basic_treemap"),
    title: {
        text: "Basic Treemap",
        style: {
            fontWeight: 500
        }
    }
};
(chart = new ApexCharts(document.querySelector("#basic_treemap"), options)).render();
options = {
    series: [{
        name: "Desktops",
        data: [{
            x: "ABC",
            y: 10
        }, {
            x: "DEF",
            y: 60
        }, {
            x: "XYZ",
            y: 41
        }]
    }, {
        name: "Mobile",
        data: [{
            x: "ABCD",
            y: 10
        }, {
            x: "DEFG",
            y: 20
        }, {
            x: "WXYZ",
            y: 51
        }, {
            x: "PQR",
            y: 30
        }, {
            x: "MNO",
            y: 20
        }, {
            x: "CDE",
            y: 30
        }]
    }],
    legend: {
        show: !1
    },
    chart: {
        height: 350,
        type: "treemap",
        toolbar: {
            show: !1
        }
    },
    title: {
        text: "Multi-dimensional Treemap",
        align: "center",
        style: {
            fontWeight: 500
        }
    },
    colors: barchartColors = getChartColorsArray("multi_treemap")
};
(chart = new ApexCharts(document.querySelector("#multi_treemap"), options)).render();
options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        height: 350,
        type: "pie"
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    legend: {
        position: "bottom"
    },
    dataLabels: {
        dropShadow: {
            enabled: !1
        }
    },
    colors: barchartColors = getChartColorsArray("simple_pie_chart")
};
(chart = new ApexCharts(document.querySelector("#simple_pie_chart"), options)).render();
options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 350,
        type: "donut"
    },
    legend: {
        position: "bottom"
    },
    dataLabels: {
        dropShadow: {
            enabled: !1
        }
    },
    colors: barchartColors = getChartColorsArray("simple_dount_chart")
};
(chart = new ApexCharts(document.querySelector("#simple_dount_chart"), options)).render();
options = {
    series: [70],
    chart: {
        height: 350,
        type: "radialBar"
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: "70%"
            }
        }
    },
    labels: ["Cricket"],
    colors: barchartColors = getChartColorsArray("basic_radialbar")
};
(chart = new ApexCharts(document.querySelector("#basic_radialbar"), options)).render();
options = {
    series: [44, 55, 67, 83],
    chart: {
        height: 350,
        type: "radialBar"
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: "22px"
                },
                value: {
                    fontSize: "16px"
                },
                total: {
                    show: !0,
                    label: "Total",
                    formatter: function(e) {
                        return 249
                    }
                }
            }
        }
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
    colors: barchartColors = getChartColorsArray("multiple_radialbar")
};
(chart = new ApexCharts(document.querySelector("#multiple_radialbar"), options)).render();
options = {
    series: [{
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20]
    }],
    chart: {
        height: 350,
        type: "radar",
        toolbar: {
            show: !1
        }
    },
    stroke: {
        colors: barchartColors = getChartColorsArray("basic_radar")
    },
    xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"]
    }
};
(chart = new ApexCharts(document.querySelector("#basic_radar"), options)).render();
options = {
    series: [{
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20]
    }, {
        name: "Series 2",
        data: [20, 30, 40, 80, 20, 80]
    }, {
        name: "Series 3",
        data: [44, 76, 78, 13, 43, 10]
    }],
    chart: {
        height: 350,
        type: "radar",
        dropShadow: {
            enabled: !0,
            blur: 1,
            left: 1,
            top: 1
        },
        toolbar: {
            show: !1
        }
    },
    stroke: {
        width: 2
    },
    fill: {
        opacity: .2
    },
    markers: {
        size: 0
    },
    colors: barchartColors = getChartColorsArray("multi_radar"),
    xaxis: {
        categories: ["2014", "2015", "2016", "2017", "2018", "2019"]
    }
};
(chart = new ApexCharts(document.querySelector("#multi_radar"), options)).render();
options = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
        type: "polarArea",
        width: 400
    },
    labels: ["Series A", "Series B", "Series C", "Series D", "Series E", "Series F", "Series G", "Series H", "Series I"],
    stroke: {
        colors: ["#fff"]
    },
    fill: {
        opacity: .8
    },
    legend: {
        position: "bottom"
    },
    colors: barchartColors = getChartColorsArray("basic_polar_area")
};
(chart = new ApexCharts(document.querySelector("#basic_polar_area"), options)).render();
barchartColors = getChartColorsArray("monochrome_polar_area"), options = {
    series: [42, 47, 52, 58, 65],
    chart: {
        width: 400,
        type: "polarArea"
    },
    labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
    fill: {
        opacity: 1
    },
    stroke: {
        width: 1,
        colors: void 0
    },
    yaxis: {
        show: !1
    },
    legend: {
        position: "bottom"
    },
    plotOptions: {
        polarArea: {
            rings: {
                strokeWidth: 0
            },
            spokes: {
                strokeWidth: 0
            }
        }
    },
    theme: {
        mode: "light",
        palette: "palette1",
        monochrome: {
            enabled: !0,
            shadeTo: "light",
            color: "#038edc",
            shadeIntensity: .6
        }
    }
};
(chart = new ApexCharts(document.querySelector("#monochrome_polar_area"), options)).render();